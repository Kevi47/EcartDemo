import { createSlice } from "@reduxjs/toolkit";

const initialstateUser = {
  name: "",
  phno: "",
  email: "",
};

const userSlice = createSlice({
  name: "Userlog",
  initialState: initialstateUser,
  reducers: {
    addTodbname: (state, actions) => {
      state.name = actions.payload;
    },
    addTodbphno: (state, actions) => {
      state.phno = actions.payload;
    },
    addTodbemail: (state, actions) => {
      state.email = actions.payload;
    },
  },
});

export default userSlice.reducer;
export const { addTodbname,addTodbphno,addTodbemail } = userSlice.actions;
