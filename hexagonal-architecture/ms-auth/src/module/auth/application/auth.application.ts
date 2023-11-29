import * as jwt from "jsonwebtoken";
import { err, ok, Result } from "neverthrow";

import { IError } from "../../../core/utils/ierror.interface";
import {
  AuthRepository,
  AuthTokens,
} from "../domain/repositories/auth.repository";
import { Auth } from "../domain/models/auth.model";
import { AuthService } from "./auth.service";

export type AuthLoginResult = Result<AuthTokens, Error>;
export type ValidateTokenResult = Result<string | jwt.JwtPayload, Error>;
export class AuthApplication {
  constructor(private readonly repository: AuthRepository) {}

  async login(auth: Auth): Promise<AuthLoginResult> {
    const userResult = await this.repository.getUserByEmail(
      auth.properties().email
    );
    if (userResult.isErr()) {
      const error: IError = new Error(userResult.error.message);
      error.status = 404;
      return err(error);
    }

    const user = userResult.value;
    if (
      !AuthService.validatePassword(auth.properties().password, user.password)
    ) {
      const error: IError = new Error("Invalid credentials");
      error.status = 404;
      return err(error);
    }

    const { name, email } = user;
    const tokens = {
      accessToken: AuthService.generateAccessToken(name, email),
      refreshToken: AuthService.generateRefreshToken(),
    };

    return ok(tokens);
  }

  async validateToken(accessToken: string): Promise<ValidateTokenResult> {
    const validateTokenResult = AuthService.validateAccessToken(accessToken);

    if (!validateTokenResult) {
      const error: IError = new Error("Invalid token");
      error.status = 401;
      return err(error);
    }

    return ok(validateTokenResult);
  }
}
