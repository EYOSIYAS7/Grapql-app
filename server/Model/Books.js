const sequelize = require("sequelize");
const db = require("../config/dbConnection");

const book = db.define("books", {
  id: { type: sequelize.INTEGER, primaryKey: true },
  name: { type: sequelize.STRING },
  genre: { type: sequelize.STRING },
  authorID: { type: sequelize.INTEGER },
});

module.exports = book;
