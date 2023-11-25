import dotenv from "dotenv";

import MySQLBootstrap from "./bootstrap/mysql";
import ServerBoostrap from "./bootstrap/server";
import logger from "./core/utils/logger";

import app from "./app";

dotenv.config();

const server = new ServerBoostrap(app);
const mysql = new MySQLBootstrap();

(async () => {
  try {
    const listPromises = [server.initialize(), mysql.initialize()];
    await Promise.all(listPromises);
    logger.info(">>>>>>>>Server and MySQL initialized");
  } catch (err) {
    logger.error(err);
    server.close();
    mysql.close();
  }
})();
