const { gql } = require('apollo-server-express');

const categoryTypeDefs = gql`
  type Category {
    _id: ID
    name: String
    createdBy: Users
    createdAt: String
    deletedAt: String
  }

  extend type Query {
    categories: [Category]
  }

  extend type Mutation {
    addCategorie(name: String!): Category
  }
`;

module.exports = categoryTypeDefs;
