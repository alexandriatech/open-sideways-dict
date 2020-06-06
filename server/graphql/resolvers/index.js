const Query = require("./Query");
const Mutation = require("./Mutation");

const resolvers = {
  Query: { ...Query },
  Mutation: { ...Mutation },
};

module.exports = resolvers;
