import {Router} from "express";
const router = Router();

//Home
router.get("/altaprofesional",(req,res)=>{
    res.render("altaProfesional")
})
router.get("/buscarprofesional",(req,res)=>{
    res.render("buscarProfesional")
})
router.get("/perfilprofesional",(req,res)=>{
    res.render("buscarProfesional")
})

export default router;