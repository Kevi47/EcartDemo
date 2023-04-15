import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pro: [],
  cartpro: [],
};

const productSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    productPush: (state, actions) => {
      state.pro = actions.payload;
    },
    cartPush: (state, actions) => {
      state.cartpro = actions.payload;
    },
  },
});
export const { productPush, cartPush } = productSlice.actions;
export default productSlice.reducer;
