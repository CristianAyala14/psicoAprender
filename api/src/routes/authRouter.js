import {Router} from "express";
import { authController } from "../controllers/authController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import {signInSchema} from "../config/zod.js"
import {validateRefreshToken} from "../middlewares/validateRefreshToken.js"

const router = Router();
//router.post("/singup", authController.signUp)
router.post("/login", schemaValidator(signInSchema),authController.logIn)
router.get("/logout", authController.logOut)
router.post("/refreshtoken", validateRefreshToken ,authController.refreshToken)

export {router as authRouter};