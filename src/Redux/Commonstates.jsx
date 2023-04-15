import { createSlice } from "@reduxjs/toolkit";

const Initialstatestatus = {
  counter: 1,
  userName: "Login",
  cartLog: true,
};

const stateSlice = createSlice({
  name: "loginstatus",
  initialState: Initialstatestatus,
  reducers: {
    counterchange: (state, actions) => {
      // state.counter? state.counter = false : state.counter = true;
      state.counter = actions.payload;
    },
    userChange: (state, actions) => {
      actions.payload === "undefined"
        ? (state.userName = "Login")
        : (state.userName = actions.payload);
    },
    cartFlag: (state) => {
      state.cartLog ?  state.cartLog = false :  state.cartLog = true;
    },
  },
});

export const { counterchange, userChange, cartFlag } = stateSlice.actions;
export default stateSlice.reducer;
