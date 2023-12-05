import { Router } from "express";

import { ApiApplication } from "../../application/api.application";
import { ApiRepository } from "../../domain/repositories/api.repository";
import { ApiInfrastructure } from "../../infrastructure/api.infrastructure";
import { ApiController } from "../controllers/api.controller";

import { Authentication } from "../middlewares/authentication";

const repository: ApiRepository = new ApiInfrastructure();
const application = new ApiApplication(repository);
const controller = new ApiController(application);

class ApiRouter {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  getRouter() {
    this.router.post("/auth/login", controller.login.bind(controller));
    this.router.post(
      "/auth/validate-token",
      controller.validateToken.bind(controller)
    );
    this.router.get(
      "/users",
      Authentication.canActivate(application),
      controller.getUsers.bind(controller)
    );
    return this.router;
  }
}

export default new ApiRouter().getRouter();
