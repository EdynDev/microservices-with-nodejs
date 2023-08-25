const http = require("http");

const app = require("./app");

const server = http.createServer(app);

const port = +process.env.PORT || 19020;

server.listen(port, () =>
  console.log(`Ejecutando el backend2 en el puerto ${port}`)
);
