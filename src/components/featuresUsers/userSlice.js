import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  user: { name: "abdul-mumin" },
  theme: "retro",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("loginUser");
    },
    logoutUser: (state) => {
      console.log("logoutUser");
    },
    toggleTheme: (state) => {
      console.log("toggleTheme");
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
