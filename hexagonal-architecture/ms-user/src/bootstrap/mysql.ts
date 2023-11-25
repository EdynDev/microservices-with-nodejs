import { DataSource } from "typeorm";
import { Bootstrap, BootstrapReturn } from "./bootstrap";
import { Parameter } from "../core/parameters";
import logger from "../core/utils/logger";

export default class MySQLBootstrap implements Bootstrap {
  private static appDataSource: DataSource;

  initialize(): Promise<BootstrapReturn> {
    const mysqlConfig = Parameter.MYSQL_CONFIG;
    logger.info(mysqlConfig.host);
    logger.info(mysqlConfig.username);
    logger.info(mysqlConfig.database);

    MySQLBootstrap.appDataSource = new DataSource({
      type: "mysql",
      ...mysqlConfig,
    });
    return MySQLBootstrap.appDataSource.initialize();
  }
  close(): void {
    MySQLBootstrap.appDataSource?.destroy();
  }

  static getDataSource(): DataSource {
    return MySQLBootstrap.appDataSource;
  }
}
