const { AuthenticationError } = require('apollo-server-express');
const { Users, BidOrBuy, Products } = require('../../models');
const { signToken } = require('../../utils/auth');

const userResolver = {
  Query: {
    users: async (parent, {}, context) => {
        if(context.user)  
            return Users.find();
        throw new AuthenticationError('Invalid token');     
    },
    user: async (parent, { userId }, context) => {
        if(context.user)
            return Users.findOne({ _id: userId });
        throw new AuthenticationError('Invalid token');    
    },
    myOffers: async(parent, {}, context) => {
        if(context.user){

            return await BidOrBuy.aggregate([
                {
                    $match: { offerBy: context.user._id }
                },
                {
                    $group: {
                        _id: "$productId",
                        productId: { $first: "$productId"},
                        price: { $max: "$price"},
                        offerBy: { $first: "$offerBy"}, 
                        offerByTime: { $first: "$offerByTime" },
                    }
                },
                { 
                    $lookup : {
                        from: "users",
                        localField: "offerBy",
                        foreignField: "_id",
                        as: "offerBy",
                    } 
                },
                {
                    $unwind: '$offerBy'
                },
                { 
                    $lookup : {
                        from: "products",
                        localField: "productId",
                        foreignField: "_id",
                        let: { currentTime: new Date().toISOString() },
                        pipeline: [
                                { $match:
                                    { $expr:
                                        { $and:
                                            [
                                                { $gt: [ "$saleEndTime", "$$currentTime"] },
                                            ]
                                        }
                                    }
                                }
                            ],
                        as: "productId",
                    } 
                },
                {
                    $unwind: '$productId'
                },
                { 
                    $lookup : {
                        from: "users",
                        localField: "productId.createdBy",
                        foreignField: "_id",
                        as: "productId.createdBy",
                    } 
                },
                {
                    $unwind: '$productId.createdBy'
                }
            ]);
        }
        throw new AuthenticationError('Invalid token');    
    },
    myListings: async(parent, { }, context) => {
        if(context.user){
            return Products.find({createdBy: context.user._id}).populate('createdBy').populate('category');
        }
    }
  },

  Mutation: {
    register: async (parent, { name, email, password }) => {
      const user = await Users.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await Users.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No users with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    diactivateUser: async (parent, { userId }, context) => {
        if (context.user && context.user.type == "admin") {
            return await Users.findByIdAndUpdate({ _id: userId }, {deletedAt: new Date()});
        }
        throw new AuthenticationError('Not logged in');
    }
  },
};

module.exports = userResolver;
