const { runIfAdmin } = require("../../utils");
const { db } = require("../../../db");
const { allWords } = require("./allWords");

async function getTagByTag(tag, context) {
  return await db.Tag.findOne({ where: { tag } });
}

async function getTagByTagId(id, context) {
  return await db.Tag.findByPk(id);
}

async function getUser(id, context) {
  return await db.User.findByPk(id);
}

async function getAllUsers () {
  return await db.User.findAll();
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

async function getAllWordsDef () {
  return await db.Word_data.findAll()
}

const Query = {
  allWords: (_, { input }, context) => allWords(input, context),
  getTagByTag: (_, { tag }, context) => getTagByTag(tag, context),
  getTagByTagId: (_, { id }, context) => getTagByTagId(id, context),
  getUser: (_, { id }, context) => getUser(id, context),
  getAllUsers: (_, __, ___, ____) => runIfAdmin(_, __, ___, ____, getAllUsers), 
  getWordById: (_, { id }, context) => getWordById(id, context),
  getWordByWord: (_, { word }, context) => getWordByWord(word, context),
  getAllWordsDef: (_, __, ___) => getAllWordsDef(),
  getWordDef: (_, { id }, context) => getWordDef(id, context),
};

module.exports = Query;
