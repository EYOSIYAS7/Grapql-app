const sequelize = require("sequelize");
const db = require("../config/dbConnection");

const Author = db.define("Authors", {
  id: { type: sequelize.INTEGER, primaryKey: true },
  name: { type: sequelize.STRING },
  age: { type: sequelize.INTEGER },
});

module.exports = Author;
