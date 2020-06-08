"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Word_data, { as: "WordDef", foreignKey: "user_id" });
    User.belongsToMany(models.Word, {
      through: "Word_data",
      foreignKey: "user_id",
      as: "Word",
    });
  };
  return User;
};
