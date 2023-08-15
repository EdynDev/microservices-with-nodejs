const express = require("express");
const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, "/public")));

app.use("**", (req, res) => res.send("ruta no encontrada"));
module.exports = app;
