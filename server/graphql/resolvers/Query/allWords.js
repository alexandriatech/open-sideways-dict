const { db } = require("../../../db");

const DEFAUL_AllWordInput = {
  asc: true,
  isPublish: true,
  sortBy: "word",
};

async function allWords(input, context) {
  // set the defaults for inputs and replace them with user inputs
  const { isPublish, sortBy, asc } = { ...DEFAUL_AllWordInput, ...input };
  return await db.Word.findAll({
    where: { isPublish },
    order: [[sortBy, asc ? "ASC" : "DESC"]],
  });
}

module.exports = { allWords };
