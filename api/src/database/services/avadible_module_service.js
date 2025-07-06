import avadible_module_model from "../models/avadible_module_model.js"

class avadible_module_service{
    getBy = async(email)=>{
        const founded = await avadible_module_model.findOne({email});
        return founded;
    }

    get = async(id)=>{
        const founded = await avadible_module_model.findById(id);
        return founded;
    }

    create = async(user)=>{
        const created = await avadible_module_model.create(user);
        return created;
    } 

    update = async(id, updateModule)=>{
        const updated = await avadible_module_model.findByIdAndUpdate(id, {
            $set:{
                professional: updateModule.profesional,
                time: updateModule.time,
                state: updateModule.state,
                day: updateModule.day,
                assigned_by: updateModule.assigned_by,
                pacient: updateModule.pacient,
                sede: updateModule.sede,
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
