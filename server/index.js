const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 3000;
const connectDB = require('./config/db');
const app = express();

connectDB()


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'

}))

app.listen(port, console.log(`server listening on port ${port}`));
