import http from "http";
import { Parameter } from "../core/parameters";
import { Bootstrap, BootstrapReturn } from "./bootstrap";
import logger from "../core/utils/logger";

export default class ServerBootstrap implements Bootstrap {
  instance: http.Server;

  initialize(): Promise<BootstrapReturn> {
    return new Promise((resolve, reject) => {
      const port = Parameter.PORT;
      const server = http.createServer((req, res) => res.end("Hello World!"));

      this.instance = server
        .listen(port)
        .on("listening", () => {
          logger.info(`Server bootstrap is listening on port ${port}`);
          resolve(true);
        })
        .on("error", (err) => {
          logger.error(err);
          reject(err);
        });
    });
  }

  close(): void {
    console.log("Closing server");
    this.instance.close();
  }
}
