import MySQLBootstrap from "./bootstrap/mysql";
import ServerBoostrap from "./bootstrap/server";
import RedisBootstrap from "./bootstrap/redis";
import logger from "./core/utils/logger";

const server = new ServerBoostrap();
const mysql = new MySQLBootstrap();
const redis = new RedisBootstrap();

(async () => {
  try {
    const listPromises = [
      server.initialize(),
      mysql.initialize(),
      redis.initialize(),
    ];
    await Promise.all(listPromises);
    logger.info(">>>>>>>>Server and MySQL initialized");
  } catch (err) {
    logger.error(err);
    server.close();
    mysql.close();
  }
})();
