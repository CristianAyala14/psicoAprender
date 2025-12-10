import { professional_user_dao } from "../database/indexDb.js";


class professionalController{
  static create = async(req, res) =>{
    const newProfessional = req.body;
    console.log(newProfessional)
    try {
      const created = await professional_user_dao.create(newProfessional);
      if(!created){
        return res.status(404).json("Couldn't create the professional.")
      }
      return res.status(201).json({
        status: "success",
        message: "Professional created successfully.",
        newProfessionalId: created._id
      });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  }
}

export { professionalController };