const dotenv = require("dotenv");

dotenv.config();

const express = require("express");
const { EspacoFisico } = require("./src/models/EspacoFisico");

const app = express();

app.use("/edison", function (req, res) {
  res.status(200).json({ message: "oi edison" });
});

app.use("/criar_espaco", async function (req, res) {
  const espacoFisico = new EspacoFisico({
    Largura: 1,
    Comprimento: 1,
    Status: "sei la mano",
    Capacidade: "10 compiuter",
    Identificacao: "39781273991287a",
  });

  await espacoFisico.save();

  res.status(200).json({ data: espacoFisico });
});

app.use("/espacos", async function (req, res) {
  const reservas = await EspacoFisico.findAll();

  res.status(200).json({ data: reservas });
});

app.listen(3333);
