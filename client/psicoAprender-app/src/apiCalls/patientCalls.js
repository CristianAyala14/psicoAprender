import { axiosWithAuth, axiosCall } from "./axiosConfig";

//auth reqs
export async function createPatientReq(newPatient){
    try {
        const response = await axiosCall.post("/patient/create", newPatient)
        return {status: response.status, data: response.data.message, newProfessionalId: response.data.newPatientId};
    } catch (error) {
        if(error.response.data.message){
            return {status: error.response.status, data: error.response.data.message};
        //error no coneccion
        }else{
            return {status: error.response.status, data: "No server response."};
        }
    }
}