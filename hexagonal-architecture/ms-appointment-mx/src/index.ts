import dotenv from "dotenv";
dotenv.config();

import ServerBoostrap from "./bootstrap/server";
import RabbitMQBootstrap from "./bootstrap/rabbitmq";
import logger from "./core/utils/logger";

import { AppointmentApplication } from "./module/appointment/application/appointment.application";
import { AppointmentRepository } from "./module/appointment/domain/repositories/appointment.repository";
import { AppointmentInfrastructure } from "./module/appointment/infrastructure/appointment.infrastructure";
import { AppointmentController } from "./module/appointment/presentation/controllers/appointment.controller";

import app from "./app";

const server = new ServerBoostrap(app);
const rabbitmq = new RabbitMQBootstrap();

const repository: AppointmentRepository = new AppointmentInfrastructure();
const application = new AppointmentApplication(repository);
const controller = new AppointmentController(application);

(async () => {
  try {
    const listPromises = [server.initialize(), rabbitmq.initialize()];
    await Promise.all(listPromises);
    await controller.listen();
  } catch (err) {
    logger.error(err);
    server.close();
  }
})();
