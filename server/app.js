const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const typeDefs = require("./gql/typeDefs");
const resolvers = require("./gql/resolvers");
const { ApolloServer } = require("apollo-server-express");
const port = process.env.PORT;

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.applyMiddleware({ app });

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
