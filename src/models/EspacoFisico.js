const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

const EspacoFisico = sequelize.define(
  "EspacoFisico",
  {
    Numero: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Comprimento: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    Largura: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    Identificacao: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    Status: {
      type: DataTypes.CHAR(20),
      allowNull: false,
    },
    Capacidade: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
  },
  { tableName: "Espaco_fisico", timestamps: false }
);

module.exports = {
  EspacoFisico,
};
