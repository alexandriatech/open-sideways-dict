"use strict";
const word_tags = require("../mockData").data.word_tag.word_tags;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Word_tags", word_tags, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Word_tags", null, {});
  },
};
