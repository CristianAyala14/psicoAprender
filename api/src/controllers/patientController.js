import { patient_user_dao } from "../database/indexDb.js";


class patientController{
  static create = async(req, res) =>{
    const newPatient = req.body;
    console.log(newPatient)
    try {
      const created = await patient_user_dao.create(newPatient);
      if(!created){
        return res.status(404).json("Couldn't create the professional.")
      }
      return res.status(201).json({
        status: "success",
        message: "Professional created successfully.",
        newPatientId: created._id
      });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  }
}

export { patientController };