"use strict";
const related_terms = require("../mockData").data.related_terms.related_terms;

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (!related_terms.length) return Promise.resolve();

    return queryInterface.bulkInsert("Related_terms", related_terms, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Related_terms", null, {});
  },
};
