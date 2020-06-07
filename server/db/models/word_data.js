"use strict";
module.exports = (sequelize, DataTypes) => {
  const Word_data = sequelize.define(
    "Word_data",
    {
      word_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      upvotes: DataTypes.INTEGER,
      isPublish: DataTypes.BOOLEAN,
    },
    {}
  );
  Word_data.associate = function (models) {
    Word_data.belongsTo(models.User, { foreignKey: "user_id" });
    Word_data.belongsTo(models.Word, { foreignKey: "word_id" });
    Word_data.hasMany(models.Related_terms);
  };
  return Word_data;
};
