const express = require("express");
const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, "/public")));

app.get("/api/config", (req, res) =>
  res.json({
    pathBackend: "http://localhost:19020/api/message",
  })
);

app.use("**", (req, res) => res.send("ruta no encontrada"));
module.exports = app;
