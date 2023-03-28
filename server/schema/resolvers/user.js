const { AuthenticationError } = require('apollo-server-express');
const { Users } = require('../../models');
const { signToken } = require('../../utils/auth');

const userResolver = {
  Query: {
    allUsers: async (parent, {}, context) => {
        if(context.user)  
            return Users.find();
        throw new AuthenticationError('Invalid token');     
    },
    user: async (parent, { userId }, context) => {
        if(context.user)
            return Users.findOne({ _id: userId });
        throw new AuthenticationError('Invalid token');    
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
