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
    getProfesionales = async(filter) => {
        try {
            const profesionales = await profesionalModel.paginate(filter);
            return profesionales;
        } catch (error) {
            return "Error al buscar profesionales.";
        }
    };
}

export default ProfesionalManager;