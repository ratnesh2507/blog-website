import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdmin: false, // Fake auth initially
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAsAdmin: (state) => {
      state.isAdmin = true;
    },
    logout: (state) => {
      state.isAdmin = false;
    },
  },
});

export const { loginAsAdmin, logout } = authSlice.actions;
export default authSlice.reducer;
