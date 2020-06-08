const { runIfAuthenticated } = require("../../utils");
const { db } = require("../../../db");

async function getUser(id, context) {
  return await db.User.findByPk(id);
}

async function getWordDef(id, context) {
  return await db.Word_data.findByPk(id);
}

async function getWord(id, context) {
  return await db.Word.findByPk(id);
}

async function allWords(context) {
  return await db.Word.findAll();
}

const Query = {
  getUser: (_, { id }, context) => getUser(id, context),
  getWordDef: (_, { id }, context) => getWordDef(id, context),
  getWord: (_, { id }, context) => getWord(id, context),
  allWords: (_, __, context) => allWords(context),
};

module.exports = Query;
