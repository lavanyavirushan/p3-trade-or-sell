const { gql } = require('apollo-server-express');

const userTypeDefs = gql`
  type Users {
    _id: ID
    name: String
    email: String
    createdAt: String
    deletedAt: String
    type: String
  }

  # Set up an Auth type to handle returning data from a users creating or user login
  type Auth {
    token: ID!
    user: Users
  }

  type Query {
    allUsers: [Users]
    user(userId: ID!): Users
  }

  type Mutation {
    # Set up mutations to handle creating a user or logging into a users and return Auth type
    register(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    diactivateUser(userId: ID!): Users
  }
`;

module.exports = userTypeDefs;
