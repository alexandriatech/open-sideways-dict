'use strict';
module.exports = (sequelize, DataTypes) => {
  const Related_terms = sequelize.define('Related_terms', {
    word_id: DataTypes.INTEGER,
    related_word_id: DataTypes.INTEGER
  }, {});
  Related_terms.associate = function(models) {
    // associations can be defined here
  };
  return Related_terms;
};