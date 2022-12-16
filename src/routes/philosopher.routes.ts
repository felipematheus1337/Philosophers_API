import { Router } from "express";
import { PhilosopherController } from "../controllers/PhilosopherController";
import multer from "multer";
import multerConfig from "../config/multerConfig";

const philosopherRouter = Router();
const upload = multer(multerConfig);

const philosopherController = new PhilosopherController();

philosopherRouter.get("/", philosopherController.findAll);
philosopherRouter.post("/", philosopherController.create);

philosopherRouter.post("/updateimage/:id", upload.single('image'), philosopherController.updatePhilosopherImage);
philosopherRouter.delete("/deleteimage/:id",philosopherController.deleteImage);



export default philosopherRouter;