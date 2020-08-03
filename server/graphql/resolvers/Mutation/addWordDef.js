const { db } = require("../../../db");

const addWordDef = async (_, { wordDef }, context) => {
  const { word_id, definition } = wordDef;
  const { id: user_id } = context.currentUser;
  const wordDefinition = await db.Word_data.upsert(
    { definition, user_id, word_id },
    { returning: true }
  );

  return wordDefinition[0];
};

module.exports = { addWordDef };
