export class Parameter {
  static get PORT() {
    return Number(process.env.APPLICATION_PORT) || 3000;
  }

  static get ENVIRONMENT() {
    return process.env.APPLICATION_ENVIRONMENT || "development";
  }

  static get JWT_SECRET() {
    return process.env.TOKEN_SECRET || "secret";
  }

  static get SERVICE_USER_BY_EMAIL() {
    return (
      process.env.SERVICE_USER_BY_EMAIL ||
      "http://localhost:3000/user/user-by-email"
    );
  }
}
