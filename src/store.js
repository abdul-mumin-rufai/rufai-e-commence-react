import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./featuresCart/cartSlice";
import userReducer from './featuresUsers/userSlice';

export const store = configureStore({
    reducer: {
        cartState: cartReducer,
        userState: userReducer,
    },
});