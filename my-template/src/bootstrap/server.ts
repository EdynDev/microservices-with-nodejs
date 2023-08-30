import http from "http";
import { Parameter } from "../core/parameters";
import { Bootstrap } from "./bootstrap";

export default class ServerBoostrap implements Bootstrap {
  instance: http.Server;

  initialize(): Promise<any> {
    return new Promise((resolve, reject) => {
      const port = Parameter.PORT;
      const server = http.createServer((req, res) => res.end("Hello World!"));

      this.instance = server
        .listen(port)
        .on("listening", () => {
          console.log(`Server is listening on port ${port}`);
          resolve(true);
        })
        .on("error", (err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  close(): void {
    console.log("Closing server");
    this.instance.close();
  }
}
