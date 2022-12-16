import { Router } from 'express';
import { WorkerController } from '../controllers/WorkerController';

const workerRouter = Router();

const workerController = new WorkerController();

workerRouter.get("/", workerController.findAll);
workerRouter.get("/id", workerController.showWork);
workerRouter.post("/", workerController.create);
workerRouter.delete("/", workerController.deleteWork);


export default workerRouter;