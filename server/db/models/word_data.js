"use strict";
module.exports = (sequelize, DataTypes) => {
  const Word_data = sequelize.define(
    "Word_data",
    {
      word_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      user_id: DataTypes.INTEGER,
      upvotes: DataTypes.INTEGER,
      definition: DataTypes.STRING,
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
  };
  return Word_data;
};
