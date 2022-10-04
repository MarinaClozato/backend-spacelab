const { Sequelize } = require("sequelize");

const configs = require("../../config/config");

const sequelize = new Sequelize(configs.development);

module.exports = {
  sequelize,
};
