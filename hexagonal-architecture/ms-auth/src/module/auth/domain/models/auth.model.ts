import { AuthEssentials } from "../interfaces/auth.interface";

export class Auth {
  private readonly email: string;
  private readonly password: string;

  constructor(props: AuthEssentials) {
    Object.assign(this, props);
  }

  properties(): AuthEssentials {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
