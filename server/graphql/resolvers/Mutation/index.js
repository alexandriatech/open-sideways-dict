const { addWord } = require("./addWord");
const { addWordDef } = require("./addWordDef");
const { authGoogle } = require("./authGoogle");
const { updateUser } = require("./updateUser");

const Mutation = {
  addWord: addWord,
  addWordDef: addWordDef,
  authGoogle: authGoogle,
  updateUser: updateUser,
};

module.exports = Mutation;
