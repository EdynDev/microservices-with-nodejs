import { EmailVO } from "../value-objects/email.vo";
import { Auth } from "../models/auth.model";
import { AuthEssentials } from "../interfaces/auth.interface";

export class AuthFactory {
  private constructor() {}

  static create(props: AuthEssentials): Auth {
    const emailResult = EmailVO.create(props.email);
    if (emailResult.isErr()) throw emailResult.error;

    return new Auth(props);
  }
}
