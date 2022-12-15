import { Router } from "express";
import greetingController from "../controllers/GreetingController";

const greetingRouter = Router();

greetingRouter.use("/", greetingController.hello);


export default greetingRouter;