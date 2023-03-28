const { gql } = require('apollo-server-express');

const productTypeDefs = gql`
  type Products {
    _id: ID
    name: String
    description: String
    image: String
    category: Category
    price: Float
    saleType: String
    saleEndTime: String
    createdBy: Users
    createdAt: String
    deletedAt: String
  }

  extend type Query {
    product(productId: ID!): Products
    products: [Products]
  }

  extend type Mutation {
    addProduct(name: String!, description: String!, image: String!, category: String!, price: Float!, saleType: String!, saleEndTime: String!): Products
  }
`;

module.exports = productTypeDefs;
