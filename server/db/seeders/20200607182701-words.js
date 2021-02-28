"use strict";
const words = require("../mockData").data.word.words;

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (!words.length) return Promise.resolve();

    return queryInterface.bulkInsert("Words", words, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Words", null, {});
  },
};
