import { configureStore } from "@reduxjs/toolkit";
import products from "./prodectSlice";
// import user from "./userSlice";
import categories from "./categoriesSlice";

export default configureStore({

    reducer:{
        products,
        categories,

    }
})