import { Router } from "express";
import { PhilosopherController } from "../controllers/PhilosopherController";
import multer from "multer";
import multerConfig from "../config/multerConfig";

const philosopherRouter = Router();
const upload = multer(multerConfig);

const philosopherController = new PhilosopherController();


philosopherRouter.post("/", philosopherController.create);

philosopherRouter.post("/updateimage", upload.single('image'),philosopherController.updatePhilosopherImage);


export default philosopherRouter;