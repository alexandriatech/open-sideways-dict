"use strict";
const tags = require("../mockData").data.tag.tags;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Tags", tags, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tags", null, {});
  },
};
