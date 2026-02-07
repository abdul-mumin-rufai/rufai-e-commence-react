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

const initialState = {
  user: { username: "abdul-mumin" },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload);
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
