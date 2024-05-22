//this hook is used to fetch Products data from the Api

import { createAsyncThunk} from '@reduxjs/toolkit';
 const useFachProduct = (nameFach, type) => {

 createAsyncThunk(`products/${nameFach}`,
async(type,thunkAPI)=>{
    const {rejectWithValue} =thunkAPI;
    try {
        const response = await fetch(`http://localhost:1337/api/products?populate=*&filters[type][$eq]=${type}`)
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
        
})
}
export default useFachProduct;