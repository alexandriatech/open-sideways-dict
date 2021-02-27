"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      role: { defaultValue: 'user', type: DataTypes.STRING },
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
    User.hasMany(models.User_Votes, {
      as: "WordsVotes",
      foreignKey: "user_id",
    });
    User.belongsToMany(models.Word_data, {
      through: "User_Votes",
      foreignKey: "user_id",
      as: "WordsVotedData",
    });
  };
  return User;
};
