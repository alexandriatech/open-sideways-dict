const { runIfAuthenticated } = require("../../utils");
const { db } = require("../../../db");
const { allWords } = require("./allWords");

async function getTag(id, context) {
  return await db.Tag.findByPk(id);
}

async function getUser(id, context) {
  return await db.User.findByPk(id);
}

async function getWordById(id, context) {
  return await db.Word.findByPk(id);
}

async function getWordByWord(word, context) {
  return await db.Word.findOne({ where: { word } });
}

async function getWordDef(id, context) {
  return await db.Word_data.findByPk(id);
}

const Query = {
  allWords: (_, { input }, context) => allWords(input, context),
  getTag: (_, { id }, context) => getTag(id, context),
  getUser: (_, { id }, context) => getUser(id, context),
  getWordById: (_, { id }, context) => getWordById(id, context),
  getWordByWord: (_, { word }, context) => getWordByWord(word, context),
  getWordDef: (_, { id }, context) => getWordDef(id, context),
};

module.exports = Query;
