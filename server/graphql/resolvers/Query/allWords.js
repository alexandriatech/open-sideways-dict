const { db } = require("../../../db");

const DEFAUL_AllWordInput = {
  asc: true,
  sortBy: "word",
};

async function allWords(input, context) {
  // set the defaults for inputs and replace them with user inputs
  const { isPublish, sortBy, asc } = { ...DEFAUL_AllWordInput, ...input };
  
  let where = {}
  if(typeof isPublish === 'boolean') where.isPublish = isPublish

  return await db.Word.findAll({
    where,
    order: [[sortBy, asc ? "ASC" : "DESC"]],
  });
}

module.exports = { allWords };
