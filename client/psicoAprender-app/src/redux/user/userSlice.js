//redux 3: CREAR la porcion de estado. 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  loading:false,
  isAuthenticated: false,
  accessToken: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    defaultState: (state)=>{
      state.user= null;
      state.error= null;
      state.loading=false;
      state.isAuthenticated=false
      state.accessToken=false
    },
    singInStart: (state)=>{
      state.loading = true
    },
    errorStart: (state)=>{
      state.error = null;
    },
    singInSuccess: (state, action)=>{
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      state.isAuthenticated= true;
    },
    setAccessToken:(state,action)=>{
      state.accessToken = action.payload
    },
    singInFailure: (state, action)=>{
      state.user = null;
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated= false;
    },
    updateUserStart:(state)=>{
      state.loading = true;
    },
    updateUserSuccess:(state, action)=>{
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = true;
    },
    updateUserFailure: (state,action)=>{
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart:(state)=>{
      state.loading = true;
    },
    deleteUserSuccess:(state, action)=>{
      state.user = null;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = false;
    },
    deleteUserFailure: (state,action)=>{
      state.error = action.payload;
      state.loading = false;
    },
  }
});

export const {singInFailure, singInSuccess, singInStart, 
  errorStart,defaultState, setAccessToken, updateUserStart,
  updateUserSuccess,updateUserFailure, deleteUserStart,
   deleteUserSuccess, deleteUserFailure} =userSlice.actions;
   
export default userSlice.reducer;