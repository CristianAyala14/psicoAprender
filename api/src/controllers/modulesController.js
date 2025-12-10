import { avadible_module_dao } from "../database/indexDb.js";
import { admin_user_dao } from "../database/indexDb.js";
import { professional_user_dao } from "../database/indexDb.js";

class modulesController{
    static create = async(req, res) =>{
        const newModule = req.body;
        try {
            const created = await avadible_module_dao.create(newModule);
            return res.status(201).json({
                status: "success",
                message: "Module created successfully.",
                newModuleId: created._id
            });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static getbyprof = async(req,res)=>{
        const requestedProfId = req.query.profId;
         if (!requestedProfId) {
            return res.status(401).json("Couldn't get module.");
        }
        try {
            const profModules = await avadible_module_dao.getByProfessional(requestedProfId);
            if (!profModules || profModules.length === 0) {
                return res.status(404).json({ message: "No modules found for this professional." });
            }
           return res.status(200).json({
                status: "success",
                payload: profModules
            });

        } catch (error) {
            return res.status(500).json("Internal server error.");
        }

    }

    static delete = async (req, res) => {
        const userId = req.user.id;
        const moduleId = req.params.id;

        try {
            const module = await avadible_module_dao.getById(moduleId);
            if (!module) {
                return res.status(404).json("Couldn't get module.");
            }

            const adminUserDoc = await admin_user_dao.getById(userId);
            const professionalUserDoc = await professional_user_dao.getById(userId);
            const validUserDoc = adminUserDoc || professionalUserDoc;
            
            if(!validUserDoc){
                return res.status(400).json({message: "Unauthorized."})
            } 
             // 3. Si es profesional, puede borrar solo sus propios  - si es admin tmb por q no entra en este if
            if (professionalUserDoc && module.professional.toString() !== userId) {
            return res.status(403).json({ message: "Forbidden. Cannot delete module from another professional." });
            }
            
            
            const deleted = await avadible_module_dao.delete(moduleId);

            return res.status(200).json({
                status: "success",
                message: "Module deleted successfully."
            });
        } catch (error) {
            return res.status(500).json("Internal server error.");
        }
    }

    static update = async (req, res) => {
        const userId = req.user.id;
        const moduleId = req.params.id;
        const updateData = req.body;

        try {
            // 1. Buscar el módulo
            const module = await avadible_module_dao.getById(moduleId);
            if (!module) {
            return res.status(404).json({ message: "Module not found." });
            }
            // 2. Verificar quién es el usuario
            const adminUserDoc = await admin_user_dao.getById(userId);
            const professionalUserDoc = await professional_user_dao.getById(userId);
            const validUserDoc = adminUserDoc || professionalUserDoc;
            if (!validUserDoc) {
            return res.status(401).json({ message: "Unauthorized." });
            }
            // 3. Si es profesional, solo puede editar sus propios módulos
            if (professionalUserDoc && module.professional.toString() !== userId) {
            return res.status(403).json({ message: "Forbidden. Cannot edit module from another professional." });
            }
            // 4. Realizar la actualización
            const updatedModule = await avadible_module_dao.update(moduleId, updateData);

            return res.status(200).json({
            status: "success",
            message: "Module updated successfully.",
            payload: updatedModule
            });

        } catch (error) {
            return res.status(500).json({ message: "Internal server error.", error: error.message });
        }
    };

    static getone = async (req, res) => {
        const moduleId = req.params.id;
        try {
            const module = await avadible_module_dao.getById(moduleId);
            if (!module) {
            return res.status(404).json({ message: "Module not found." });
            }
            return res.status(200).json({
            status: "success",
            message: "Module retrieved successfully.",
            payload: module
            });

        } catch (error) {
            return res.status(500).json({ message: "Internal server error.", error: error.message });
        }
    };

    static getall = async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 10;
            const page = parseInt(req.query.page) || 1;

            // Filtros recibidos
            const {
            sede = "all",
            disponibilidad = "all",
            profesion = "all",
            tipo = "NONE"
            } = req.query;

            const filter = {};

            // Aplicar filtros si no es "all"
            if (sede !== "all") filter.sede = sede;
            if (disponibilidad !== "all") filter.state = disponibilidad;
            if (profesion !== "all") filter["professional_profession"] = profesion;
            if (tipo !== "NONE") filter["mode"] = tipo;

            // Paginación y orden
            const skip = (page - 1) * limit;

            const modules = await avadible_module_dao.getFilteredModules(filter, skip, limit);
            const total = await avadible_module_dao.countFilteredModules(filter);

            return res.status(200).json({
            status: "success",
            modules,
            total,
            page,
            totalPages: Math.ceil(total / limit)
            });

        } catch (error) {
            console.error("Error fetching modules with filters:", error);
            return res.status(500).json({ message: "Internal server error." });
        }
    };






}

export { modulesController };