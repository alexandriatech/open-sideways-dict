"use strict";
const words_datas = require("../mockData").data.word_data.word_datas;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Word_data", words_datas, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Word_data", null, {});
  },
};
