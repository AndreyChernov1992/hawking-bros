import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    deleteFromCart(state, action) {
        state.splice(
            state.findIndex((product) => product.id === action.payload),
            1,
        );
    },
    addToCart(state, action) {
      state.push(action.payload);
    },
    resetState() {
      return initialState;
    },
  },
});

export const { deleteFromCart, addToCart, resetState } =
  cartSlice.actions;

export default cartSlice.reducer;
