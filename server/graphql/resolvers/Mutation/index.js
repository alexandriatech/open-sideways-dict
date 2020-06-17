const { authGoogle } = require("./authGoogle");

const Mutation = {
  authGoogle: authGoogle,
  updateUser: (_, { user }) => {
    return {};
  },
  addWordDef: (_, { wordDefData }) => {
    return {};
  },
  addWord: (_, { wordData }) => {
    return {};
  },
};

module.exports = Mutation;
