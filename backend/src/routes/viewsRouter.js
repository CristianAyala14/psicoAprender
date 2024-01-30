import {Router} from "express";
const router = Router();

//Home
router.get("/",(req,res)=>{
    res.render("altaProfesional")
})
export default router;