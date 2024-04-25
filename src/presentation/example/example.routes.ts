import { Router } from "express";
import { ExampleController } from "./example.controller";
import { ExampleService } from "./example.service";


export class ExampleRoutes {
  static get routes(): Router {

    const router = Router();
    const service = new ExampleService();
    const controller = new ExampleController(service);

    router.get('/', controller.getExamples);
    router.post('/', controller.createExample);
    return router;

  }
}