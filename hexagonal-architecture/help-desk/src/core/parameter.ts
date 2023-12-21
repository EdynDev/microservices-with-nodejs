// import { MySQLConfig } from "./interface/mysql";
// import { RedisConfig } from "./interface/redis";

export class Parameter {
  static get PORT() {
    return Number(process.env.APPLICATION_PORT) || 3000;
  }

  static get ENVIRONMENT() {
    return process.env.NODE_ENV || "development";
  }

  static get RABBIT_HOST(): string {
    return process.env.RABBIT_HOST || "localhost:5672";
  }

  static get EXCHANGE_NAME(): string {
    return process.env.EXCHANGE_NAME || "exchange";
  }

  static get EXCHANGE_TYPE(): string {
    return process.env.EXCHANGE_TYPE || "direct";
  }

  static get ROUTING_KEY(): string {
    return process.env.ROUTING_KEY || "MX";
  }
}
