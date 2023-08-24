const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/healthz", (req, res) => res.send("Todo está ok"));

app.get("/api/message", async (req, res) => {
  try {
    const messages = {
      msg01: "Tu IP es:",
    };

    const path = process.env.SERVICE_BACKEND2 || "http://localhost/api/myIp";

    console.log("PATH", path);
    const response = await axios.get(path);

    messages.msg02 = response.data.message;

    res.json(messages);
  } catch (error) {
    res.json({
      msg01: "Error:",
      msg02: error,
    });
  }
});

app.use("**", (req, res) => res.send("ruta no encontrada"));

module.exports = app;
