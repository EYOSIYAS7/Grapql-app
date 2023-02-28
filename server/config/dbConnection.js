const { Sequelize } = require("sequelize");

const db = new Sequelize("test", "postgres", "690177", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = db;
