import { configureStore } from "@reduxjs/toolkit";
import products from "./prodectSlice";
import categories from "./categoriesSlice";
import auth from "./authSlice";

export default configureStore({

    reducer:{
        products,
        categories,
        auth,
        
    }
})