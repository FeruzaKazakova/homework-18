import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { todoSlice } from "./todo/todoSlice";

export const store = configureStore({
    reducer:{
        todo: todoSlice.reducer,
        auth: authSlice.reducer
    }
})