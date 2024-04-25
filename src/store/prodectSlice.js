
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

export const getSingleProduct = createAsyncThunk("products/getSingleProduct",
async(id,thunkAPI)=>{
    const {rejectWithValue} =thunkAPI;
    try {
        const response = await fetch(`http://localhost:1337/api/products/${id}?populate=*`)
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
//filter products
export const filterProducts = createAsyncThunk("products/filterProducts",
async(filter,thunkAPI)=>{
    const {rejectWithValue} =thunkAPI;
    try {
        const response = await fetch(`http://localhost:1337/api/products?category=${filter}`)
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)


const initialState ={
    products:[],
    singleProduct:null,
    isLoding:false,
    error:null
}


const productSlice = createSlice({

    name:'products',
    initialState,
     
    extraReducers:(builder)=>{
        //To Get all products
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


        
        // To get single product
        builder.addCase(getSingleProduct.fulfilled,(state,action)=>{

            state.isLoding = false ;
            state.error = null;
            state.singleProduct =action.payload;
        })
        builder.addCase(getSingleProduct.rejected,(state,action)=>{
            state.isLoding = false;
            state.error =action.payload;
             console.log("Error in data loading",action.payload);
        });
        builder.addCase(getSingleProduct.pending,(state,action)=>{
            state.isLoding = true;
        });
    }
        
    
  

})

export default productSlice.reducer;
