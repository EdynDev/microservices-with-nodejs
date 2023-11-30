import http from "http";
import { Application } from "express";
import { Parameter } from "../core/parameters";
import { Bootstrap, BootstrapReturn } from "./bootstrap";
import logger from "../core/utils/logger";

export default class ServerBootstrap implements Bootstrap {
  instance: http.Server;

  constructor(private readonly app: Application) {}

  initialize(): Promise<BootstrapReturn> {
    return new Promise((resolve, reject) => {
      const port = Parameter.PORT;
      const server = http.createServer(this.app);

      this.instance = server
        .listen(port)
        .on("listening", () => {
          logger.info(`Server is listening on port ${port}`);
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
