import { axiosWithAuth, axiosCall } from "./axiosConfig";

//auth reqs
export async function createProfessionalReq(newProfessional){
    try {
        const response = await axiosCall.post("/professional/create", newProfessional)
        return {status: response.status, data: response.data.message, newProfessionalId: response.data.newProfessionalId};
    } catch (error) {
        if(error.response.data.message){
            return {status: error.response.status, data: error.response.data.message};
        //error no coneccion
        }else{
            return {status: error.response.status, data: "No server response."};
        }
    }
}