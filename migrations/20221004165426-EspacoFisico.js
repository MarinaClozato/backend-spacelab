"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("Espaco_fisico", {
      Numero: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Comprimento: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false,
      },
      Largura: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false,
      },
      Identificacao: {
        type: Sequelize.DataTypes.CHAR(50),
        allowNull: false,
      },
      Status: {
        type: Sequelize.DataTypes.CHAR(20),
        allowNull: false,
      },
      Capacidade: {
        type: Sequelize.DataTypes.CHAR(50),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("Espaco_fisico");
  },
};
