
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';

export const getProducts =createAsyncThunk("products/getProducts",

async( _, thunkAPI)=>{
    const { rejectWithValue} =thunkAPI
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json();
        return data;
    } catch (error) {
        // return rejectWithValue(error.message)
        console.log("Error in data loading",error.message);
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
            //to show error message 
            state.error =action.payload;
             console.log("Error in data loading",action.payload);
        });
        builder.addCase(getProducts.pending,(state,action)=>{
            state.isLoding = true;
            // console.log("Loading data");
        });
    }
        
    
  

})

export default productSlice.reducer;