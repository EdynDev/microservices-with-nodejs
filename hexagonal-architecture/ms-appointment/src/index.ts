import dotenv from "dotenv";
dotenv.config();

import ServerBoostrap from "./bootstrap/server";
import RabbitMQBootstrap from "./bootstrap/rabbitmq";
import logger from "./core/utils/logger";

import app from "./app";

const server = new ServerBoostrap(app);
const rabbitmq = new RabbitMQBootstrap();

(async () => {
  try {
    const listPromises = [server.initialize(), rabbitmq.initialize()];
    await Promise.all(listPromises);
  } catch (err) {
    logger.error(err);
    server.close();
  }
})();
