const userResolver = require('./resolvers/user');
const categoryResolver = require('./resolvers/category');
const productResolver = require('./resolvers/product');


const userTypeDefs = require('./typeDefs/userTypeDefs');
const categoryTypeDefs = require('./typeDefs/categoryTypeDefs');
const productTypeDefs = require('./typeDefs/productTypeDefs');



const schema = buildSubgraphSchema([
    { typeDefs: userTypeDefs, resolvers: userResolver },
    { typeDefs: categoryTypeDefs, resolvers: categoryResolver },
    { typeDefs: productTypeDefs, resolvers: productResolver },
  ]);

module.exports = schema;