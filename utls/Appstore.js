import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";

const Appstore = configureStore({
    reducer:{
        cart1: cartReducer
    }
})

export default Appstore;