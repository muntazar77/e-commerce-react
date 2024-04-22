
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';

export const getProducts =createAsyncThunk("products/getProducts",


async( _, thunkAPI)=>{
    const { rejectWithValue} =thunkAPI
    try {
        const response = await fetch("http://localhost:1337/api/products?populate=*")
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const initialState ={
    products:[],
    isLoding:false,
    error:null
}


const productSlice = createSlice({

    name:'products',
    initialState,
     
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            // state.products = action.payload;
            state.isLoding = false ;
            state.error = null;
            state.products =action.payload;
        });
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.isLoding = false;
            state.error =action.payload;
             console.log("Error in data loading",action.payload);
        });
        builder.addCase(getProducts.pending,(state,action)=>{
            state.isLoding = true;
        });
    }
        
    
  

})

export default productSlice.reducer;