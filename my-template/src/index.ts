import MySQLBootstrap from "./bootstrap/mysql";
import ServerBoostrap from "./bootstrap/server";
import RedisBootstrap from "./bootstrap/redis";

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
    console.log(">>>>>>>>Server and MySQL initialized");
  } catch (err) {
    console.log(err);
    server.close();
    mysql.close();
  }
})();
