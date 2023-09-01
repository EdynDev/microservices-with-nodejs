import IORedis from "ioredis";
import { Bootstrap, BootstrapReturn } from "./bootstrap";
import { Parameter } from "../core/parameters";

export default class RedisBootstrap implements Bootstrap {
  private static client: IORedis;
  initialize(): Promise<BootstrapReturn> {
    return new Promise((resolve, reject) => {
      const redisConfig = Parameter.REDIS_CONFIG;
      RedisBootstrap.client = new IORedis(redisConfig);

      RedisBootstrap.client
        .on("connect", () => {
          resolve(true);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  close(): void {
    RedisBootstrap.client?.disconnect();
  }
}
