import { Router } from "express";
import { PhilosopherController } from "../controllers/PhilosopherController";


const philosopherRouter = Router();

const philosopherController = new PhilosopherController();


philosopherRouter.post("/", philosopherController.create);


export default philosopherRouter;