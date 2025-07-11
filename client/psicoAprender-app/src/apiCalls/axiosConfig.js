import axios from 'axios';
import { store } from '../redux/store.js'; 
// import { setAccessToken } from '../redux/user/userSlice.js';
// import { refreshTokenReq, } from './loginCalls.js';
const base_url = `http://localhost:3000/api` //cambiar por dominio?


//calls que no llevan accessToken al backend, osea que no van a rutas protegidas.
export const axiosCall = axios.create({
    baseURL: base_url ,
    withCredentials: true,
})


//calls que SI llevan accessToken al backend, van a rutas protegidas.
export const axiosWithAuth = axios.create({
    baseURL: base_url,
    withCredentials: true,
});




// Interceptor para agregar el accessToken a las solicitudes
axiosWithAuth.interceptors.request.use(
    (config) => {
        const state = store.getState(); // Obtiene el estado actual de Redux
        const accessToken = state.user.accessToken;
        
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// Interceptor para rellamar a refresh token si recibe un 401.
axiosWithAuth.interceptors.response.use(
    (response) => {
        // Si la respuesta es exitosa, simplemente la devuelve
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            //si el error de llamada original es 401 y no se hizo un retry se hace segunda llamada:
            try {
                const res = await refreshTokenReq();
                if (res.status === 200) {
                    store.dispatch(setAccessToken(res.accessToken));
                    axiosWithAuth.defaults.headers['Authorization'] = `Bearer ${res.accessToken}`;
                    return axiosWithAuth(originalRequest);
                }else if(res.status===401){
                    store.dispatch(defaultState())
                    //el backend contesta pero con error seteado en el
                }

            } catch (refreshError) {
                //si es 401, pero hay errores de server o otros errores en llamada 2 se devuelve aca.
                return Promise.reject(refreshError);
            }
        }
        //si no es 401, se devuelve error de primer llamada a secas en cada instancia de la apicall.
        return Promise.reject(error);
    }
);