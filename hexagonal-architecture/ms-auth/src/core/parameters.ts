export class Parameter {
  static get PORT() {
    return Number(process.env.APPLICATION_PORT) || 3000;
  }

  static get ENVIRONMENT() {
    return process.env.APPLICATION_ENVIRONMENT || "development";
  }
}
