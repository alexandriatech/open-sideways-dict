const { runIfAuthenticated } = require("../../utils");
const { db } = require("../../../db");

async function allWords(context) {
  return await db.Word.findAll();
}

async function getTag(id, context) {
  return await db.Tag.findByPk(id);
}

async function getUser(id, context) {
  return await db.User.findByPk(id);
}

async function getWord(id, context) {
  return await db.Word.findByPk(id);
}

async function getWordDef(id, context) {
  return await db.Word_data.findByPk(id);
}

const Query = {
  allWords: (_, __, context) => allWords(context),
  getTag: (_, { id }, context) => getTag(id, context),
  getUser: (_, { id }, context) => getUser(id, context),
  getWord: (_, { id }, context) => getWord(id, context),
  getWordDef: (_, { id }, context) => getWordDef(id, context),
};

module.exports = Query;
