const { AuthenticationError } = require('apollo-server-express');
const { Category } = require('../../models');

const categoryResolver = {
  Query: {
    categories: async () => {
        return await Category.find().populate('createdBy');
    },
  },

  Mutation: {
    addCategorie: async (parent, { name }, context) => {

        if(context.user && context.user.type == "admin"){
            const createdBy = context.user._id;
            const categorie = await (await Category.create({ name, createdBy })).populate('createdBy');

            return categorie;
        }
        throw new AuthenticationError('Not logged in');
    }
  },
};

module.exports = categoryResolver;
