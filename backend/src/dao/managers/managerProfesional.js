import profesionalModel from "../models/profesional.js";

class ProfesionalManager{
    //tested
    createProfesional = async (profesional) => {
        try {
            const newProfesional = await profesionalModel.create(profesional);
            return newProfesional;

        } catch (error) {
            throw new Error(`Error al crear el carrito: ${error.message}`);
        }
    };
    getProfesionales = async(filter, options) => {
        try {
            const profesionales = await profesionalModel.paginate(filter,options);
            if(profesionales.docs.length===0){
                return "Error al buscar profesionales."
            }
            return profesionales;
        } catch (error) {
            return "Error al buscar profesionales.";
        }
    };
    getProfesionalesById = async(pid) => {
        try {
            const profesional = await profesionalModel.findOne({_id: pid });
            return profesional;
        } catch (error) {
            return "El profesional seleccionado no pudo ser encontrado.";
        }
    };
}

export default ProfesionalManager;