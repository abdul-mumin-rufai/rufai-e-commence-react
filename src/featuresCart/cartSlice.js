import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// every product is a cart item.
const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
};


function getCartFromLocalStorage() {
    return JSON.parse(localStorage.getItem('cart')) || defaultState
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: getCartFromLocalStorage(),
    reducers: {
        // always remember to take in consideration the payload when needed.
        addItem: (state, action) => {
            const { product } = action.payload;
            const item = state.cartItems.find((i) => i.cartID === product.cartID);
            if (item) {
                item.amount += product.amount;
            } else {
                state.cartItems.push(product);
            }
            state.numItemsInCart += product.amount;
            state.cartTotal += product.price * product.amount;
            // refactor code here
            cartSlice.caseReducers.calculateToatal(state);
            toast.success('Item added to cart')
        },
        clearCart: (state) => {
            localStorage.setItem('cart', JSON.stringify(defaultState));
            return defaultState;
        },
        removeItem: (state, action) => {
            const { cartID } = action.payload;
            const item = state.cartItems.find((i) => i.cartID === cartID);
            state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
            state.numItemsInCart -= item.amount;
            state.cartTotal -= item.price * item.amount;
            // refactor code here
            cartSlice.caseReducers.calculateToatal(state);
            toast.error('Item removed form cart')
        },
        editItem: (state, action) => {
            const { cartID, amount } = action.payload;
            const item = state.cartItems.find((i) => i.cartID === cartID);
            state.numItemsInCart += amount - item.amount;
            state.cartTotal += item.price * (amount - item.amount);
            item.amount = amount;
            // refactor code here
            cartSlice.caseReducers.calculateToatal(state);
            toast.success('Cart Updated')


        },

        // refactoring the code ie code that would be repeated.
        calculateToatal: (state) => {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem('cart', JSON.stringify(state));
        },

    },
});

// we export the actions
export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
// we export the reducer in the cartSlice.
export default cartSlice.reducer;