import admin_user_model from "../models/admin_user_model.js"

class admin_user_service{
    getByReference = async(reference)=>{
        const founded = await admin_user_model.findOne({reference});
        return founded;
    }

    getById = async(id)=>{
        const founded = await admin_user_model.findById(id);
        return founded;
    }

    create = async(user)=>{
        const created = await admin_user_model.create(user);
        return created;
    } 

    update = async(id, updateUser)=>{
        const updated = await admin_user_model.findByIdAndUpdate(id, {
            $set:{
                name: updateUser.name,
                last_name: updateUser.last_name,
                description: updateUser.description,
                email: updateUser.email,
                password: updateUser.password,
                profileImage: updateUser.profileImage,
                contact: updateUser.contact
            }
        }, {new:true})

        return updated;

    }

    delete = async(id)=>{
        const deleted = await admin_user_model.findByIdAndDelete(id)
        return deleted;
    }

   
}

export {admin_user_service};
