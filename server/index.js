require("dotenv").config();
const express = require("express");
const server = require("./graphql");
const { db } = require("./db");

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
