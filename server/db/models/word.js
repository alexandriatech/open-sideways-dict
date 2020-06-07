"use strict";
module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define(
    "Word",
    {
      word: DataTypes.STRING,
      isPublish: DataTypes.BOOLEAN,
    },
    {}
  );
  Word.associate = function (models) {
    Word.belongsToMany(models.User, {
      through: "Word_data",
      foreignKey: "word_id",
    });
    Word.belongsToMany(models.Tag, {
      through: "Word_tag",
      foreignKey: "word_id",
    });
    Word.hasMany(models.Related_terms);
  };
  return Word;
};
