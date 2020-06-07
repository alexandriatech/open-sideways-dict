"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      tag: DataTypes.STRING,
    },
    {}
  );
  Tag.associate = function (models) {
    Tag.belongsToMany(models.Word, {
      through: "Word_tag",
      foreignKey: "tag_id",
    });
    // associations can be defined here
  };
  return Tag;
};
