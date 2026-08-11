import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import counterSlice from "./features/counter/counterSlice";
import cartSlice from "./features/cart/cartSlice";
import productsSlice from "./features/products/productsSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    products: productsSlice, // ** Added products slice to the store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
