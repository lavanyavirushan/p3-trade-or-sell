const { gql } = require('apollo-server-express');

const bidOrBuyTypeDefs = gql`
  type BidOrBuy {
    _id: ID
    productId: Products
    price: Float
    offerBy: Users
    offerByTime: String
  }

  extend type Mutation {
    offer(productId: String!, price: Float!): BidOrBuy
  }
`;

module.exports = bidOrBuyTypeDefs;
