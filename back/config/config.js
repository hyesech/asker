const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "asker",
    host: "127.0.0.1",
    dialect: "mysql",
    baseURL: "http://localhost:8000",
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "asker",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "asker",
    host: "127.0.0.1",
    dialect: "mysql",
    baseURL: "https://asker.fans",
  },
};
