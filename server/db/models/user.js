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
    User.belongsToMany(models.Word, {
      through: "Word_data",
      foreignKey: "user_id",
    });
  };
  return User;
};
