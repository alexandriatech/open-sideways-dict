const db = require("./models");

db.sequelize
  .authenticate()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((e) => console.log("error", e));

module.exports = {
  db,
};
