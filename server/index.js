const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginInlineTraceDisabled } = require('apollo-server-core')
const path = require('path');
const { authMiddleware } = require('./utils/auth');
require('dotenv').config()

const schema = require('./schema');
const db = require('./config/db');

const PORT = process.env.PORT || 3000;
const app = express();
const server = new ApolloServer({
  schema,
  context: authMiddleware,
  plugins: [ApolloServerPluginInlineTraceDisabled()]
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer();
