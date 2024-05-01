
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';

//TO get all products
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

//To get single product
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
        const response = await fetch(`http://localhost:1337/api/products?populate=*&filters[categroys][id][$eq]=${filter}`)
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
    filterProducts:[],
    error:null,
    cartProductIds:[],
}


const productSlice = createSlice({

    name:'products',
    initialState,
    reducers:{
        //To add product
        addToCart:(state,action)=>{
             state.cartProductIds.push(action.payload);
            //  state.cartProductIds =[action.payload, ...state.cartProductIds]

         
        },
        removeFromCart:(state, action)=>{
            const index =state.cartProductIds.indexOf(action.payload)
            state.cartProductIds.splice(index,1)
        },
        clearAllItems:(state)=>{
            state.cartProductIds = []
        }
    },
     
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



        //To filter products
        builder.addCase(filterProducts.fulfilled,(state,action)=>{
            state.isLoding = false ;
            state.error = null;
            state.filterProducts =action.payload;
        })
        builder.addCase(filterProducts.rejected,(state,action)=>{
            state.isLoding = false;
            state.error =action.payload;
             console.log("Error in data loading",action.payload);
        });
        builder.addCase(filterProducts.pending,(state,action)=>{
            state.isLoding = true;
        });

    }
        
    
  

})
// Remove the unused assignment of 'addProduct' variable
// const addProduct = productSlice.actions;

export const {addToCart ,removeFromCart} = productSlice.actions;
export default productSlice.reducer;
