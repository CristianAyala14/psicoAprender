import { axiosCall, axiosWithAuth } from "./axiosConfig";


export async function logInReq(user){
    try {
        const response = await axiosCall.post("/auth/login", user)
        return {status: response.status, data: response.data.message, user: response.data.payload, accessToken: response.data.accessToken};
    } catch (error) {
        if(error.response.data.message){
            return {status: error.response.status, data: error.response.data.message};
        }else{
            return {status: error.response.status, data: "No server response."};
        }
    }
}

export async function logOutReq(){
    try {
        const response = await axiosCall.get("/auth/logout")
        return {status: response.status, data: response.data.message, user: response.data.payload};
    } catch (error) {
        if(error.response.data.message){
            return {status: error.response.status, data: error.response.data.message};
        }else{
            return {status: error.response.status, data: "No server response."};
        }
    }
}

export async function refreshTokenReq(){
    try {
        const response = await axiosCall.get("/auth/refresh")
        return {status: response.status, data: response.data.message, user: response.data.payload, accessToken: response.data.accessToken};
    } catch (error) {
        if(error.response.data.message){
            return {status: error.response.status, data: error.response.data.message};
        }else{
            return {status: error.response.status, data: "No server response."};
        }
    }
}