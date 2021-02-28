"use strict";
const user_votes = require("../mockData").data.user_votes.user_votes;

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (!user_votes.length) return Promise.resolve();

    return queryInterface.bulkInsert("User_Votes", user_votes, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User_Votes", null, {});
  },
};
