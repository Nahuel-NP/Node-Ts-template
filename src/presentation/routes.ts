import { Router } from "express";
import { ExampleRoutes } from "./example/example.routes";

export class AppRoutes {
  static get routes(): Router {

    const router = Router();
    router.use('/api/examples', ExampleRoutes.routes)
    return router;
  }
}