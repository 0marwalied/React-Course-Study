import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/login/loginSlice";
import cartSlice from "./features/cart/cartSlice";
import { globalReducer } from "./features/global/globalSlice";
import { persistStore, persistReducer, type WebStorage } from "redux-persist";
import storageModule from "redux-persist/lib/storage";
import { apiSlice } from "./services/apiSlice";

const storage =
  (storageModule as unknown as { default?: WebStorage }).default ??
  (storageModule as unknown as WebStorage);

const persistCartConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(persistCartConfig, cartSlice);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    login: loginSlice,
    global: globalReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = () => store.dispatch;
export const persistor = persistStore(store);
