const { runIfAuthenticated } = require("../../utils");
const { addWord } = require("./addWord");
const { addWordDef } = require("./addWordDef");
const { authGoogle } = require("./authGoogle");
const { updateUser } = require("./updateUser");

const Mutation = {
  addWord: (parent, args, context, info) =>
    runIfAuthenticated(parent, args, context, info, addWord),
  addWordDef: addWordDef,
  authGoogle: authGoogle,
  updateUser: updateUser,
};

module.exports = Mutation;
