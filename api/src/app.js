import express from "express";
import cookieParser from "cookie-parser";
import { envObject } from "./config/enviroment.js";
import {ConnectDB} from "./config/db.js";
import cors from "cors";
import morgan from "morgan";

//route imports
import { authRouter } from "./routes/authRouter.js";
import { modulesRouter } from "./routes/modulesRouter.js";

//app set
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({origin: envObject.client, credentials: true}))  
app.use(cookieParser())
app.use(morgan("dev"))
//DB connect
ConnectDB();


//routes
app.use("/api/auth", authRouter)
app.use("/api/modules", modulesRouter)


//server run
const PORT = envObject.server.port
app.listen(PORT, ()=>{
    console.log(`El servidor funciona en el puerto: ${PORT}`)
}) 