const { AuthenticationError } = require('apollo-server-express');
const { Products } = require('../../models');

const productResolver = {
  Query: {
    products: async () => {
        return Products.find().populate('createdBy').populate('category');
    },
    product: async (parent, { productId }) => {
      return Products.findById(productId).populate('createdBy').populate('category');
    }
  },

  Mutation: {
    addProduct: async (parent, { name, description, image, category, price, saleType, saleEndTime   }, context) => {

        if(context.user){
            const createdBy = context.user._id;
            const categorie = await (await(await Products.create({ name, name, description, image, category, price, saleType, saleEndTime, createdBy })).populate('createdBy')).populate('category');

            return categorie;
        }
        throw new AuthenticationError('Not logged in');
    }
  },
};

module.exports = productResolver;
