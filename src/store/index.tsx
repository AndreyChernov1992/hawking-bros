import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/productSlice';
import cartReducer from './slice/cartSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;