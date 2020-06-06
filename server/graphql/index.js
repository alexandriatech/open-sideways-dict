const fs = require("fs");
const path = require("path");
const { ApolloServer, gql } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const resolvers = require("./resolvers");
const typeDefs = fs.readFileSync(path.join(__dirname, "./schema.gql"), "utf8");
const { isAuthenticated } = require("./utils");
const { IS_AUTHENTICATED_CONTEXT } = require("../constants");

const context = ({ req, res }) => {
  const token = req.headers.authorization;
  const currentUser = !!token && jwt.verify(token, process.env.JWT_SECRET);
  if (currentUser) currentUser.dataValues = { ...currentUser };
  return {
    req,
    res,
    currentUser,
    [IS_AUTHENTICATED_CONTEXT]: isAuthenticated(currentUser),
  };
};

const onConnect = async (connectionParams) => true;

const isIntrospectionOn =
  process.env.NODE_ENV !== "production" ||
  (process.env.NODE_ENV === "production" &&
    process.env.IS_INTROSPECTION_ON === "true");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: isIntrospectionOn,
  playground: true,
  subscriptions: { onConnect },
});

module.exports = server;
