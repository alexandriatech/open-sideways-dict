"use strict";
module.exports = (sequelize, DataTypes) => {
  const Related_terms = sequelize.define(
    "Related_terms",
    {
      word_id: DataTypes.INTEGER,
      related_word_id: DataTypes.INTEGER,
    },
    {}
  );
  Related_terms.associate = function (models) {
    Related_terms.belongsTo(models.Word, { foreignKey: "word_id" });
  };
  return Related_terms;
};
