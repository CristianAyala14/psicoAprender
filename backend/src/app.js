import express from "express";
import __dirname from "./utils.js";
//para views handlebars
import {engine} from "express-handlebars";
//routers
import profesionalRouter from "./routes/profesionalRouter.js"
import viewsRouter from "./routes/viewsRouter.js"
//mongoose
import mongoose from "mongoose";
//autenticaciones

//manejo de cookies

//server
const PORT = 8080;
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`))
//handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars")
app.set("views", __dirname + "/views")
//mongoDB
const MONGO = "mongodb+srv://cristianpabloayala:psicoaprender@psicoaprendernube.0qs5muf.mongodb.net/PsicoAprender"
const connection = mongoose.connect(MONGO);
//cookies
//passport

//routes
app.use("/", viewsRouter)
app.use("/api/profesional", profesionalRouter)


const server = app.listen(PORT, ()=>{
    console.log(`El servidor funciona en el puerto: ${PORT}`)
})



