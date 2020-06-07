"use strict";
module.exports = (sequelize, DataTypes) => {
  const Word_tag = sequelize.define(
    "Word_tag",
    {
      word_id: DataTypes.INTEGER,
      tag_id: DataTypes.INTEGER,
    },
    {}
  );
  Word_tag.associate = function (models) {
    Word_tag.belongsTo(models.Word, { foreignKey: "word_id" });
    Word_tag.belongsTo(models.Tag, { foreignKey: "tag_id" });
  };
  return Word_tag;
};
