import { Router } from "express";
import greetingController from "../domain/GreetingController";

const greetingRouter = Router();

greetingRouter.use("/", greetingController.hello);


export default greetingRouter;