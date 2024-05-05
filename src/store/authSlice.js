// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('auth/loginUser', async (userData) => {
    const response = await axios.post('http://localhost:1337/auth/local', userData);
    return response.data;
});
const initialState = 
{
 user: null,
 token: null 
}


     

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
 
    extraReducers:(builder)=>{
        //To Get all products
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            state.user = action.payload.user;
            state.token = action.payload.jwt;
            console.log(state.token);
        });
        // builder.addCase(loginUser.rejected,(state,action)=>{
        //     state.isLoding = false;
        //     state.error =action.payload;
        //      console.log("Error in data loading",action.payload);
        // });
        // builder.addCase(loginUser.pending,(state,action)=>{
        //     state.isLoding = true;
        // });
    }
});

export default authSlice.reducer;