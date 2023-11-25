export class IdException extends Error {
  constructor() {
    super();
    this.name = "IdException";
    this.message = "Invalid Id";
    Object.setPrototypeOf(this, IdException.prototype);
  }
}
