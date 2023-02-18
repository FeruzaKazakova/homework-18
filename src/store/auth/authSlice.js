import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    isAuthorized: false,
};
  
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      logIn(state, action) {
        state.email = action.payload;
        state.isAuthorized = true;
      },
      logOut() {
        return initialState
      },
    },
});
  
export const authActions = authSlice.actions;
  
