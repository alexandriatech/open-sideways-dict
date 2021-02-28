"use strict";
module.exports = (sequelize, DataTypes) => {
  const Word_data = sequelize.define(
    "Word_data",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      word_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      definition: DataTypes.STRING,
      // the default of isPublish might change in the future 
      // if we allow only admins to approve wordds
      isPublish: { defaultValue: true, type: DataTypes.BOOLEAN },
      votes: {
        type: DataTypes.INTEGER,
        async get() {
          const _votes = await this.getUserVotes();
          let votesValue = 0;
          _votes.forEach((e) => (votesValue += e.value));
          return votesValue;
        },
        set(_) {
          throw new Error("Do not try to set votes!");
        },
      },
    },
    {}
  );
  Word_data.associate = function (models) {
    Word_data.belongsTo(models.User, { foreignKey: "user_id" });
    Word_data.belongsTo(models.Word, { foreignKey: "word_id" });
    Word_data.belongsToMany(models.Tag, {
      through: "Word_tag",
      foreignKey: "word_data_id",
      as: "Tag",
    });
    Word_data.hasMany(models.User_Votes, {
      as: "UserVotes",
      foreignKey: "word_data_id",
    });
    Word_data.belongsToMany(models.User, {
      through: "User_Votes",
      foreignKey: "word_data_id",
    });
  };
  return Word_data;
};
