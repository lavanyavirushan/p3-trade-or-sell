const userResolver = require('./resolvers/user');
const categoryResolver = require('./resolvers/category');
const productResolver = require('./resolvers/product');
const bidOrBuyResolver = require('./resolvers/bidOrBuy')


const userTypeDefs = require('./typeDefs/userTypeDefs');
const categoryTypeDefs = require('./typeDefs/categoryTypeDefs');
const productTypeDefs = require('./typeDefs/productTypeDefs');
const bidOrBuyTypeDefs = require('./typeDefs/bidOrBuy')


const { buildSubgraphSchema } = require("@apollo/subgraph");

const schema = buildSubgraphSchema([
    { typeDefs: userTypeDefs, resolvers: userResolver },
    { typeDefs: categoryTypeDefs, resolvers: categoryResolver },
    { typeDefs: productTypeDefs, resolvers: productResolver },
    { typeDefs: bidOrBuyTypeDefs, resolvers: bidOrBuyResolver }
  ]);

module.exports = schema;