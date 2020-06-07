'use strict';
module.exports = (sequelize, DataTypes) => {
  const Word_data = sequelize.define('Word_data', {
    word_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    upvotes: DataTypes.INTEGER
  }, {});
  Word_data.associate = function(models) {
    // associations can be defined here
  };
  return Word_data;
};