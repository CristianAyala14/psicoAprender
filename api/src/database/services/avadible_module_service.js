import avadible_module_model from "../models/avadible_module_model.js"

class avadible_module_service{
    getByReference = async(reference)=>{
        const founded = await avadible_module_model.findOne({reference});
        return founded;
    }

    getById = async(id)=>{
        const founded = await avadible_module_model.findById(id);
        return founded;
    }

    getAll = async () => {
        const modules = await avadible_module_model.find();
        return modules;
    }

    getByProfessional = async (profId) => {
        const modules = await avadible_module_model.find({ professional: profId });
        return modules;
    };

    create = async(user)=>{
        const created = await avadible_module_model.create(user);
        return created;
    } 

    update = async(id, updateModule)=>{
        const updated = await avadible_module_model.findByIdAndUpdate(id, {
            $set:{
                time: updateModule.time,
                day: updateModule.day,
                patient: updateModule.patient,
                mode: updateModule.mode
            }
        }, {new:true})

        return updated;

    }

    delete = async(id)=>{
        const deleted = await avadible_module_model.findByIdAndDelete(id)
        return deleted;
    }

   
}

export {avadible_module_service};
