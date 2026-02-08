import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  acid: "acid",
  retro: "retro",
  dark: "dark",
  light: "light",
};

function getThemeFromLocalStorage() {
  const theme = localStorage.getItem("theme") || themes.retro;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
}
function getUserFromLoaclStorage() { 
  return JSON.parse(localStorage.getItem('user')) || null;
};

const initialState = {
  user: getUserFromLoaclStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      // setting up the payload ie the user info
      const user = { ...action.payload.user, token: action.payload.jwt }; // the user info is located at where we logged in the user
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      toast.success('Logged out sucessfully')
    },
    toggleTheme: (state) => {
      const { retro, dark, light, acid } = themes;
      state.theme =
        state.theme === retro
          ? dark
          : state.theme === dark
            ? light
            : state.theme === light
              ? acid
              : retro;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
