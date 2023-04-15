import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./Commonstates";
import userSlice from "./Signinstate";
import productSlice from "./Product";
export const store = configureStore({
  reducer: {
    signup: stateSlice,
    userLog: userSlice,
    productD: productSlice,
  },
});
