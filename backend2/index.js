const http = require("http");

const app = require("./app");

const server = http.createServer(app);

const port = 19030;

server.listen(port, () =>
  console.log(`Ejecutando el backend1 en el puerto ${port}`)
);
