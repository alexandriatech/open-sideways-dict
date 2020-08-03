const { db } = require("../../../db");

const addWordDef = async (_, { wordDef }, context) => {
  const { word_id, definition, tags } = wordDef;
  const { id: user_id } = context.currentUser;
  const wordDefinition = await db.Word_data.upsert(
    { definition, user_id, word_id },
    { returning: true }
  );

  const word_data_id = wordDefinition[0].id;
  // TODO: (josue): I am 75% sure there is a better way to do this.
  if (tags) {
    for (let tag of tags) {
      const tagData = await db.Tag.findCreateFind({
        where: { tag },
      });
      const word_tag = await db.Word_tag.upsert({
        word_data_id,
        tag_id: tagData[0].id,
      });
    }
  }

  return wordDefinition[0];
};

module.exports = { addWordDef };
