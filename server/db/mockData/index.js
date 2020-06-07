const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

const data = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const mockData = require(path.join(__dirname, file));
    const dataName = file.slice(0, file.length - 3);
    data[dataName] = mockData;
  });

module.exports = { data };
