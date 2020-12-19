require("dotenv").config({ path: __dirname + "/./../../../.env" });

module.exports = {
  development: {
    username: process.env.APP_DB_USERNAME,
    password: process.env.APP_DB_PASSWORD,
    database: process.env.APP_DB,
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: process.env.APP_DB_USERNAME,
    password: process.env.APP_DB_PASSWORD,
    database: process.env.APP_DB,
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.APP_DB_USERNAME,
    password: process.env.APP_DB_PASSWORD,
    database: process.env.APP_DB,
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
