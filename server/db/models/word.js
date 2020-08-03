"use strict";
module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define(
    "Word",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      word: { type: DataTypes.STRING, unique: true },
      isPublish: { defaultValue: false, type: DataTypes.BOOLEAN },
    },
    {}
  );
  Word.associate = function (models) {
    Word.hasMany(models.Word_data, { as: "WordDef", foreignKey: "word_id" });
    Word.belongsToMany(models.User, {
      through: "Word_data",
      foreignKey: "word_id",
      as: "User",
    });
    Word.belongsToMany(models.Word, {
      through: "Related_terms",
      foreignKey: "word_id",
      as: "RelatedTerms",
    });
    Word.belongsToMany(models.Word, {
      through: "Related_terms",
      foreignKey: "related_word_id",
      as: "SubRelatedTerms",
    });
  };
  return Word;
};
