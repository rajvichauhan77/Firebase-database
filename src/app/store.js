import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from "../features/authSlice"
import { cartReducer } from "../features/cartSlice";
// import { alertReducer } from "../features/alertSlice";
import { alertReducer } from "../features/alretSlice";

export const store = configureStore({
    reducer : {
        auth : authReducer,
        cart : cartReducer,
        alert : alertReducer
    }
})