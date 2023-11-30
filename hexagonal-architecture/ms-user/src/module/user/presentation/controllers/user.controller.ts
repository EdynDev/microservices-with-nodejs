import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

import { UserApplication } from "../../application/user.application";
import { UserFactory } from "../../domain/factories/user.factory";

export class UserController {
  constructor(private readonly application: UserApplication) {}

  async insert(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    const id = uuidv4();
    const user = await UserFactory.create({
      id,
      ...body,
    });

    const userResult = await this.application.save(user);
    if (userResult.isErr()) {
      return next(userResult.error);
    }
    res.json(userResult.value);
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    const userResult = await this.application.getAll();
    if (userResult.isErr()) {
      return next(userResult.error);
    }
    res.json(userResult.value);
  }

  async getByEmail(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;
    const userResult = await this.application.getByEmail(email);
    if (userResult.isErr()) {
      return next(userResult.error);
    }
    res.json(userResult.value);
  }
}
