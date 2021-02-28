const { runIfAuthenticated, runIfAdmin } = require("../../utils");
const { addWord } = require("./addWord");
const { addWordDef } = require("./addWordDef");
const { authGoogle } = require("./authGoogle");
const { updateUser } = require("./updateUser");
const { db } = require("../../../db");

async function updateUserSelf (_, { user }, { currentUser }) {
  // for now we only allow update to username
  // even though we accept email. 
  const { username } = user;
  const { id } = currentUser;

  const updatedUser = await db.User.update({ username },
    {
      where: { id },
      returning: true,
      plain: true
    })
      
  return updatedUser[1];
}
const Mutation = {
  addWord: (parent, args, context, info) =>
    runIfAuthenticated(parent, args, context, info, addWord),
  addWordDef: (parent, args, context, info) =>
    runIfAuthenticated(parent, args, context, info, addWordDef),
  authGoogle: authGoogle,
  updateUserSelf: (parent, args, context, info) =>
  runIfAuthenticated(parent, args, context, info, updateUserSelf),
  updateUser: (_, __, ___, ____) => runIfAdmin(_, __, ___, ____, updateUser)
};

module.exports = Mutation;
