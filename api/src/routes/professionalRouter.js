import { Router } from "express";
import {professionalController} from "../controllers/professionalController.js";


const router = Router();
router.post("/create", professionalController.create);

export {router as professionalRouter};