const { AuthenticationError } = require("apollo-server-express");
const { IS_AUTHENTICATED_CONTEXT } = require("../../constants");

function isAuthenticated(user) {
  return !!user;
}

// wrapper function to run function only if context has authentication
function runIfAuthenticated(parent, args, context, info, resolver) {
  if (context[IS_AUTHENTICATED_CONTEXT])
    return resolver(parent, args, context, info);
  else throw new AuthenticationError("Unauthorized");
}

module.exports = {
  isAuthenticated,
  runIfAuthenticated,
};
