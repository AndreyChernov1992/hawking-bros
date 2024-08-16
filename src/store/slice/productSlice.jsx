import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    saveProduct(state, action) {
      state.push(...action.payload);
    },
    deleteProduct(state, action) {
        state.splice(
            state.findIndex((product) => product.id === action.payload),
            1,
        );
    },
    addProduct(state, action) {
      state.push(action.payload);
    },
    resetState() {
      return initialState;
    },
  },
});

export const { saveProduct, deleteProduct, addProduct, resetState } =
  productSlice.actions;

export default productSlice.reducer;
