import { Router } from "express";

import { AuthApplication } from "../../application/auth.application";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { AuthInfrastructure } from "../../infrastructure/auth.infrastructure";
import { AuthController } from "../controllers/auth.controller";

const repository: AuthRepository = new AuthInfrastructure();
const application = new AuthApplication(repository);
const controller = new AuthController(application);

class AuthRouter {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  getRouter() {
    this.router.post("/login", controller.login.bind(controller));
    this.router.post(
      "/validate-token",
      controller.validateToken.bind(controller)
    );

    return this.router;
  }
}

export default new AuthRouter().getRouter();
