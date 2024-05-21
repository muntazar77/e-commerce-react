// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('auth/loginUser', async (userData) => {
    const response = await axios.post('http://localhost:1337/api/auth/local', userData);
    return response.data;
});

// initialize userToken from local storage
const userData = localStorage.getItem('userData')
  ? localStorage.getItem('userData')
  : null
  const isLogin = localStorage.getItem('isLogin')
  ? localStorage.getItem('isLogin')
  : null

const initialState = 
{
 userData ,
//  userToken,
isLogin,
 
}


     

const authSlice = createSlice({
    name: 'auth',
    initialState,

    extraReducers:(builder)=>{
        //To Get all products
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            state.userData = action.payload;
            localStorage.setItem('userData',JSON.stringify(action.payload));
            localStorage.setItem('isLogin',true);
        });
        
        builder.addCase(loginUser.pending,(state,action)=>{
            state.isLoding = true;
            localStorage.setItem('isLogin',true);
        });
        builder.addCase(loginUser.rejected,(state,action)=>{
            state.isLoding = false;
            localStorage.setItem('isLogin',false);
            console.log(action.error.message);
        });
    }
});

export default authSlice.reducer;