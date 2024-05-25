import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState ={
    categories:[],
    isLoding:false,
    error:null
}
export const getCategories = createAsyncThunk("categories/getCategories",
async(_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}categroys?populate=*`)
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


 const categoriesSlice =createSlice({
    name:'categories',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getCategories.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(getCategories.fulfilled,(state,action)=>{
            state.categories = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getCategories.rejected,(state,action)=>{
            state.error = action.payload;
            state.isLoading = false;
        })
    }
})

export default categoriesSlice.reducer;