import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

import { Parameter } from "../../../core/parameters";

export class AuthService {
  static async validatePassword(
    password: string,
    passwordHash: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, passwordHash);
  }

  static generateAccessToken(name: string, email: string): string {
    return jwt.sign({ name, email }, Parameter.JWT_SECRET, {
      expiresIn: "2m",
    });
  }

  static generateRefreshToken(): string {
    return uuidv4();
  }

  static validateAccessToken(accessToken: string) {
    try {
      return jwt.verify(accessToken, Parameter.JWT_SECRET);
    } catch (error) {
      return null;
    }
  }
}
