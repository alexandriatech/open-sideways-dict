const { db } = require("../../../db");

const addWord = async (_, { word }) => {
  const wordDB = await db.Word.findCreateFind({
    where: { word: word.toLowerCase() },
  });
  return wordDB[0];
};

module.exports = { addWord };
