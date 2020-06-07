"use strict";
const words = require("../mockData").data.word.words;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Words", words, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Words", null, {});
  },
};
