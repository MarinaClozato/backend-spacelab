const dotenv = require("dotenv");

dotenv.config();

const urlObject = new URL(process.env.DATABASE_URL ?? "");

const configs = {
  development: {
    database: urlObject.pathname?.substring(1),
    username: urlObject.username,
    password: urlObject.password,
    host: urlObject.hostname,
    port: urlObject.port,
    dialect: urlObject.protocol?.substring(0, urlObject.protocol.length - 1),
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
      },
    },
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

console.log(configs);

module.exports = configs;
