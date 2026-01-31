import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./featuresCart/cartSlice";

export const store = configureStore({
    reducer: {
        cartState: cartReducer,
    },
});