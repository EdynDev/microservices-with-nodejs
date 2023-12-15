export class Parameter {
  static get PORT() {
    return Number(process.env.APPLICATION_PORT) || 3000;
  }

  static get SERVICE_AUTH_LOGIN() {
    return process.env.SERVICE_AUTH_LOGIN || "http://localhost:3010/auth/login";
  }
  static get SERVICE_AUTH_VALIDATE_TOKEN() {
    return (
      process.env.SERVICE_AUTH_VALIDATE_TOKEN ||
      "http://localhost:3010/auth/validate-token"
    );
  }

  static get SERVICE_USER_LIST() {
    return process.env.SERVICE_USER_LIST || "http://localhost:3001/user";
  }

  static get SERVICE_APPOINTMENT() {
    return (
      process.env.SERVICE_APPOINTMENT || "http://localhost:3030/appointment"
    );
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

  static get EXCHANGE_NAME_ERROR(): string {
    return process.env.EXCHANGE_NAME_ERROR || "exchange-error";
  }

  static get ROUTING_KEY(): string {
    return process.env.ROUTING_KEY || "MX";
  }

  static get EXCHANGE_NAME_DLQ(): string {
    return process.env.EXCHANGE_NAME_DLQ || "course-dlq";
  }

  static get ROUTING_KEY_DLQ(): string {
    return process.env.ROUTING_KEY_DLQ || "help-desk";
  }

  static readonly ENVIRONMENT = process.env.NODE_ENV || "development";
}
