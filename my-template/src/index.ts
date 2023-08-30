import ServerBoostrap from "./bootstrap/server";

const server = new ServerBoostrap();

(async () => {
  try {
    await server.initialize();
  } catch (err) {
    server.close();
  }
})();
