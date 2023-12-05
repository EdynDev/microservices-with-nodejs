import dotenv from "dotenv";
dotenv.config();

import ServerBoostrap from "./bootstrap/server";
import logger from "./core/utils/logger";

import app from "./app";

const server = new ServerBoostrap(app);

(async () => {
  try {
    const listPromises = [server.initialize()];
    await Promise.all(listPromises);
  } catch (err) {
    logger.error(err);
    server.close();
  }
})();
