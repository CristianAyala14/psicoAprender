import professional_user_model from "../models/professional_user_model.js"

class professional_user_service{
    getBy = async(email)=>{
        const founded = await professional_user_model.findOne({email});
        return founded;
    }

    get = async(id)=>{
        const founded = await professional_user_model.findById(id);
        return founded;
    }

    create = async(user)=>{
        const created = await professional_user_model.create(user);
        return created;
    } 

    update = async(id, updateUser)=>{
        const updated = await professional_user_model.findByIdAndUpdate(id, {
            $set:{
                name: updateUser.name,
                last_name: updateUser.last_name,
                description: updateUser.description,
                email: updateUser.email,
                password: updateUser.password,
                profession_1: updateUser.profession_1,
                profession_2: updateUser.profession_2,
                profileImage: updateUser.profileImage,
                contact: updateUser.contact,
                days_avadible: updateUser.days_avadible,
                sede: updateUser.sede
            }
        }, {new:true})

        return updated;

    }

    delete = async(id)=>{
        const deleted = await professional_user_model.findByIdAndDelete(id)
        return deleted;
    }

   
}

export {professional_user_service};
