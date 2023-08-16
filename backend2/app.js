const express = require("express");
const os = require("os");
const app = express();

app.get("/healthz", (req, res) => res.send("Todo está ok"));

app.get("/api/myIp", (req, res) => {
  try {
    var interfaces = os.networkInterfaces();
    var myIp = "0.0.0.0";
    for (var devName in interfaces) {
      var iface = interfaces[devName];

      for (var i = 0; i < iface.length; i++) {
        var alias = iface[i];
        if (
          alias.family === "IPv4" &&
          alias.address !== "127.0.0.1" &&
          !alias.internal
        )
          myIp = alias.address;
      }
    }

    res.json({ message: myIp });
  } catch (error) {
    res.json({
      message: "Error:",
    });
  }
});

app.use("**", (req, res) => res.send("ruta no encontrada"));

module.exports = app;
