import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: 0,
        cart: []
    },
    reducers: {
        // adds a new item to cart
        increment: (state, action) => {
            state.cart.push(action.payload);
            state.items += 1;
        },
        
        // removes the item from cart. 
        decrement: (state, action) => {
            state.cart.remove(action.payload);
            state.items -= 1;
        }
    }
});

// Actions for cart reducer
export const { increment, decrement} = cartSlice.actions;

export default cartSlice.reducer;