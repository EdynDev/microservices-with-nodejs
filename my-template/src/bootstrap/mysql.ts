import { DataSource } from "typeorm";
import { Bootstrap, BootstrapReturn } from "./bootstrap";
import { Parameter } from "../core/parameters";

export default class MySQLBootstrap implements Bootstrap {
  private static appDataSource: DataSource;

  initialize(): Promise<BootstrapReturn> {
    const mysqlConfig = Parameter.MYSQL_CONFIG;

    MySQLBootstrap.appDataSource = new DataSource({
      type: "mysql",
      ...mysqlConfig,
    });
    return MySQLBootstrap.appDataSource.initialize();
  }
  close(): void {
    console.log("Closing mysql");
    MySQLBootstrap.appDataSource?.destroy();
  }
}
