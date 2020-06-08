const Query = require("./Query");
const Mutation = require("./Mutation");
const otherResolvers = require("./Other");

const resolvers = {
  ...otherResolvers,
  Query: { ...Query },
  Mutation: { ...Mutation },
};

module.exports = resolvers;
