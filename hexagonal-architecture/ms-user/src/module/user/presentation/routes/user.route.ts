import { Router } from "express";

import { Validator } from "../../../../core/presentation/validator";

import { UserInfrastructure } from "../../infrastructure/user.infrastructure";
import { UserRepository } from "../../domain/repositories/user.repository";
import { UserApplication } from "../../application/user.application";
import { UserController } from "../controllers/user.controller";
import { UserInsertDto } from "../dtos/user-insert.dto";
import { UserByEmailDto } from "../dtos/user-by-email.dto";

const repository: UserRepository = new UserInfrastructure();
const application = new UserApplication(repository);
const controller = new UserController(application);

class UserRouter {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  getRouter() {
    this.router.get("/", controller.getAll.bind(controller));
    this.router.post(
      "/",
      Validator.execute({ body: new UserInsertDto() }),
      controller.insert.bind(controller)
    );
    this.router.post(
      "/user-by-email",
      Validator.execute({ body: new UserByEmailDto() }),
      controller.getByEmail.bind(controller)
    );
    return this.router;
  }
}

export default new UserRouter().getRouter();
