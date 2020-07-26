"use strict";
module.exports = (sequelize, DataTypes) => {
  const User_Votes = sequelize.define(
    "User_Votes",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      user_id: DataTypes.INTEGER,
      word_data_id: DataTypes.INTEGER,
      value: DataTypes.INTEGER,
    },
    {}
  );
  User_Votes.associate = function (models) {
    User_Votes.belongsTo(models.User, { foreignKey: "user_id", as: "User" });
    User_Votes.belongsTo(models.Word_data, {
      foreignKey: "word_data_id",
      as: "wordDef",
    });
  };
  return User_Votes;
};
