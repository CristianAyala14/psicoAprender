import { Router } from "express";
import {patientController} from "../controllers/patientController.js";


const router = Router();
router.post("/create", patientController.create);

export {router as patientRouter};