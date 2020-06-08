"use strict";
const related_terms = require("../mockData").data.related_terms.related_terms;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Related_terms", related_terms, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Related_terms", null, {});
  },
};
