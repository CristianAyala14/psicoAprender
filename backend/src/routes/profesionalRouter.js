import  {Router} from "express";
import ProfesionalManager from "../dao/managers/managerProfesional.js";
let profesionalManager = new ProfesionalManager();

const router = Router();
//crear profesional
router.post("/", async (req,res)=>{
    try {
        const {nombre, apellido, especialidad, duracionSesion, contacto} = req.body;
        if(!nombre, !apellido, !especialidad, !duracionSesion, !contacto){
            res.status(400).send({
                status: "error",
                message: "Faltan datos para dar de alta."
            })
        };
        const nuevoProfesional = {
            nombre,
            apellido,
            especialidad,
            duracionSesion,
            contacto
        }
        const profesionalCreado = await profesionalManager.createProfesional(nuevoProfesional)
        res.status(200).send({
            status: "success",
            message: "Profesional creado correctamente."
        })
    } catch (error) {
        res.status(404).send({
            status: "error",
            message: "El profesional no pudo ser creado."
        })
    }
})
//buscar profesionales
router.get("/buscar", async (req,res)=>{
    try {
        const { busquedaTipo, valorBusqueda, page} = req.query;
        let filter = {}
        if (busquedaTipo === "nombre") {
            filter = { nombre: valorBusqueda };
        } else if (busquedaTipo === "codigo") {
            filter = { codigo: valorBusqueda };
        }else if(busquedaTipo === "especialidad"){
            filter = { especialidad: valorBusqueda };
        }else if(busquedaTipo === "apellido"){
            filter = { apellido: valorBusqueda };
        } 
        else if(busquedaTipo === "none"){
            filter = {};
        }

        const options = {
            limit: 5,
            page: page ? parseInt(page, 10) : 1,            
            lean: true
        };

        const profesionales = await profesionalManager.getProfesionales(filter,options)
        
        res.send({
            status: "success",
            message: "Busqueda finalizada.",
            profesionales
        })
        
        
       
    } catch (error) {
        res.status(500).json({ error: "Error en la busqueda de profesionales del servidor." });
    }
})
//buscar profesional por id
router.get("/buscar/:pid", async(req,res)=>{
    try {
        const pid = req.params.pid;
        const encontrado = await profesionalManager.getProfesionalesById(pid);
        res.send({
            status: "success",
            message: "Profesional encontrado.",
            encontrado
        })    
    } catch (error) {
        
    }

})




export default router; 