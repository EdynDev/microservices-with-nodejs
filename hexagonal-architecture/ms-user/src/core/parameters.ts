import { MySQLConfig } from "./interface/mysql";

export class Parameter {
  static get PORT() {
    return Number(process.env.APPLICATION_PORT) || 3000;
  }

  static get ENVIRONMENT() {
    return process.env.APPLICATION_ENVIRONMENT || "development";
  }

  static get MYSQL_CONFIG(): MySQLConfig {
    return {
      host: process.env.MYSQL_HOST || "localhost",
      username: process.env.MYSQL_USER || "test",
      password: process.env.MYSQL_PASSWORD || "test",
      database: process.env.MYSQL_DATABASE || "course",
      portt: Number(process.env.MYSQL_PORT) || 3306,
      entities: [
        process.env.MYSQL_ENTITIES || "/src/**/infrastructure/**/*.entity.ts",
      ],
      synchronize: Boolean(process.env.MYSQL_SYNCHRONIZE) || true,
      poolSize: Number(process.env.MYSQL_POOL_SIZE) || 5,
      logging: Boolean(process.env.MYSQL_LOGGING) || true,
      maxQueryExecutionTime:
        Number(process.env.MYSQL_MAX_QUERY_EXECUTION_TIME) || 10000,
    };
  }
}
