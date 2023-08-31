import MySQLBootstrap from "./bootstrap/mysql";
import ServerBoostrap from "./bootstrap/server";

const server = new ServerBoostrap();
const mysql = new MySQLBootstrap();

(async () => {
  try {
    const listPromises = [server.initialize(), mysql.initialize()];
    await Promise.all(listPromises);
    console.log(">>>>>>>>Server and MySQL initialized");
  } catch (err) {
    console.log(err);
    server.close();
    mysql.close();
  }
})();
