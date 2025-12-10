import {Router} from "express";
import { modulesController} from "../controllers/modulesController.js"
import  validateAccessToken from "../middlewares/validateAccessToken.js";

const router = Router()

router.post("/create",validateAccessToken, modulesController.create)
router.get("/getbyprof", validateAccessToken, modulesController.getbyprof)
router.get("/delete/:id", validateAccessToken, modulesController.delete)
router.post("/update/:id", validateAccessToken, modulesController.update)
router.get("/get/:id", validateAccessToken, modulesController.getone) 
router.get("/getall", modulesController.getall)



export {router as modulesRouter}; 