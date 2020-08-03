"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      tag: { type: DataTypes.STRING, unique: true },
    },
    {}
  );
  Tag.associate = function (models) {
    Tag.belongsToMany(models.Word_data, {
      through: "Word_tag",
      foreignKey: "tag_id",
      as: "WordData",
    });
  };
  return Tag;
};
