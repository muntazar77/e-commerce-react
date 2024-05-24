
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';



export const getProducts = createAsyncThunk('products/getProducts', async (_,thunkAPI) => {
  const { rejectWithValue} =thunkAPI

  try {
    // const response = await axios.get(`http://localhost:1337/api/products?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`);
    const response = await axios.get(`${process.env.REACT_APP_API_URL}products?populate=*`);
  return response.data;
} catch (error) {
    console.log("Error in data loading",error.message);
     return rejectWithValue(error.message)
}
});



//To get single product
export const getSingleProduct = createAsyncThunk("products/getSingleProduct",
async(id,thunkAPI)=>{
    const {rejectWithValue} =thunkAPI;
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}products/${id}?populate=*`)
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
        const response = await fetch(`${process.env.REACT_APP_API_URL}products?populate=*&filters[categroys][id][$eq]=${filter}`)
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)



// to get Carousal Products
 export const getCarousalProducts = createAsyncThunk("products/getCarousalProducts",
 async(type,thunkAPI)=>{
     const {rejectWithValue} =thunkAPI;
     try {
         const response = await fetch(`${process.env.REACT_APP_API_URL}products?populate=*&filters[type][$eq]=${type}`)
         const data = await response.json();
         return data;
     } catch (error) {
         return rejectWithValue(error.message)
     }
 })


 // to get Featured Products 
 export const getFeaturedProducts = createAsyncThunk("products/getFeaturedProducts",
 async(type,thunkAPI)=>{
     const {rejectWithValue} =thunkAPI;
     try {
         const response = await fetch(`${process.env.REACT_APP_API_URL}products?populate=*&filters[type][$eq]=${type}`)
         const data = await response.json();
         return data;
     } catch (error) {
         return rejectWithValue(error.message)
     }
 })

  // to get  TrendProducts Products 
  export const getTrendProducts = createAsyncThunk("products/getTrendProducts",
  async(type,thunkAPI)=>{
      const {rejectWithValue} =thunkAPI;
      try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}products?populate=*&filters[type][$eq]=${type}`)
          const data = await response.json();
          return data;
      } catch (error) {
          return rejectWithValue(error.message)
      }
  })


// export const getFeaturedProducts = useFetchProduct("getFeaturedProducts","featured")


const initialState ={
    products:[],
    singleProduct:null,
    isLoding:false,
    filterProducts:[],
    error:null,
    cartProductIds:[],
    carousalProducts:[],
    featuredProducts:[],
    trendProducts:[]
}


const productSlice = createSlice({

    name:'products',
    initialState,
    reducers:{
        //To add product
        addToCart:(state,action)=>{
            
              const product =state.cartProductIds.find(item=>item.id === action.payload.id)
            ! product && state.cartProductIds.push(action.payload);

         
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



        //To get featured products
        builder.addCase(getFeaturedProducts.fulfilled,(state,action)=>{
            state.isLoding = false ;
            state.error = null;
            state.featuredProducts =action.payload;

        })
        builder.addCase(getFeaturedProducts.rejected,(state,action)=>{
            state.isLoding = false;
            state.error =action.payload;
             console.log("Error in data loading",action.payload);
        });


           //To get CarousalProducts 
           builder.addCase(getCarousalProducts.fulfilled,(state,action)=>{
            state.isLoding = false ;
            state.error = null;
            state.carousalProducts =action.payload;

        })
        builder.addCase(getCarousalProducts.rejected,(state,action)=>{
            state.isLoding = false;
            state.error =action.payload;
             console.log("Error in data loading",action.payload);
        });



          //To get trendProducts
          builder.addCase(getTrendProducts.fulfilled,(state,action)=>{
            state.isLoding = false ;
            state.error = null;
            state.trendProducts =action.payload;

        })
        builder.addCase(getTrendProducts.rejected,(state,action)=>{
            state.isLoding = false;
            state.error =action.payload;
             console.log("Error in data loading",action.payload);
        });
    }
        
    
  

})


export const {addToCart ,removeFromCart ,clearAllItems} = productSlice.actions;
export default productSlice.reducer;
