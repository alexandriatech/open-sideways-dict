'use strict';
module.exports = (sequelize, DataTypes) => {
  const Word_tag = sequelize.define('Word_tag', {
    word_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {});
  Word_tag.associate = function(models) {
    // associations can be defined here
  };
  return Word_tag;
};