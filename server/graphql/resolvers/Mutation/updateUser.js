const { db } = require("../../../db");

const updateUser = async (_, { user }) => {
  // for now we only allow update to username
  // even though we accept email. 
  const { id, username, role } = user;

  const updatedUser = await db.User.update({ username, role },
    {
      where: { id },
      returning: true,
      plain: true
    })
      
  return updatedUser[1];
};

module.exports = { updateUser };
