import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import counterSlice from "./features/counter/counterSlice";
import cartSlice from "./features/cart/cartSlice";
import { productsApiSlice } from "./features/products/productsSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
