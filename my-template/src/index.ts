import MySQLBootstrap from "./bootstrap/mysql";
import ServerBoostrap from "./bootstrap/server";
import RedisBootstrap from "./bootstrap/redis";
import logger from "./core/utils/logger";
import { MedicProps } from "./module/medic/domain/roots/medic";
import { MedicFactory } from "./module/medic/domain/roots/medic.factory";

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

    const medicProps: MedicProps = {
      id: "63a7da77-f49a-45fc-a282-9b5527e0ebd7",
      name: "John",
      lastname: "Doe",
      email: "john.doe@email.com",
      phone: "1234567890",
      address: ["Fake Street 123"],
      dni: "12345678",
      cmp: "123456",
    };

    const medic = MedicFactory.create(medicProps);

    medic.delete();
    medic.update({ name: "Jane" });
    console.log(medic);
  } catch (err) {
    logger.error(err);
    server.close();
    mysql.close();
  }
})();
