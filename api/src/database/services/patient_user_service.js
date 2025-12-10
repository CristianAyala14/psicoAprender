import patient_model from "../models/patient_user_model.js";

class patient_user_service {

    getByReference = async (reference) => {
        const found = await patient_model.findOne({ reference }).populate('assigned_professional').populate('assigned_by');
        return found;
    }

    getById = async (id) => {
        const found = await patient_model.findById(id).populate('assigned_professional').populate('assigned_by');
        return found;
    }


    create = async (patient) => {
        const created = await patient_model.create(patient);
        return created;
    }

    update = async (id, updatedPatient) => {
        const updated = await patient_model.findByIdAndUpdate(
            id,
            {
                $set: {
                    name: updatedPatient.name,
                    last_name: updatedPatient.last_name,
                    email: updatedPatient.email,
                    contact: updatedPatient.contact,
                    reason_for_consultation: updatedPatient.reason_for_consultation,
                    assigned_professional: updatedPatient.assigned_professional,
                    appointment_day: updatedPatient.appointment_day,
                    assigned_by: updatedPatient.assigned_by
                }
            },
            { new: true }
        );
        return updated;
    }

    delete = async (id) => {
        const deleted = await patient_model.findByIdAndDelete(id);
        return deleted;
    }
}

export { patient_user_service };