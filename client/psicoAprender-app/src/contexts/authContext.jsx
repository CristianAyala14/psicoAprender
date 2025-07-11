import {createContext, useContext} from "react";
import {logInReq, logOutReq} from "../apiCalls/logIn.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//redux
import { useDispatch } from 'react-redux';
import { singInStart, singInSuccess, singInFailure, errorStart,setAccessToken, defaultState } from '../redux/user/userSlice';

const authContext = createContext();

export const AuthContextProvider = ({children})=>{
    
    const {error, loading}= useSelector((state)=> state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();

  
    const logIn = async (user) =>{
        try {
            dispatch(singInStart());
            const res = await logInReq(user);
            console.log(res)
            if(res.status === 200){
                dispatch(singInSuccess(res.user));
                dispatch(setAccessToken(res.accessToken))
                if(res.user.rol == "admin"){
                navigate("/panel-view")
                }else{
                    navigate("/professional-panel-view")
                }
            }else {
                dispatch(singInFailure(res.data));
                console.log("status !200")
            }
            
        } catch (error) {
            dispatch(singInFailure("Network or other error"));
        }
    }

    const logOut = async () =>{
        dispatch(defaultState());
            const res = await logOutReq();
            console.log(res)
            navigate("/")
    }


    return (
        <authContext.Provider value={{singIn, logOut, error, loading}}>
            {children}
        </authContext.Provider>
    )
    
}

export const useAuthContext = ()=>{
    const context = useContext(authContext)
    if(!context){
        throw new Error("useAuthContext must be used within a provider")
    }
    return context;
}