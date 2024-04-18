import { configureStore } from "@reduxjs/toolkit";
import products from "./prodectSlice";
// import user from "./userSlice";

export default configureStore({

    reducer:{
        products,
        // user,
    }
})