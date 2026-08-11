import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { IProudct } from "../../../interfaces";
import { addItemToShopping } from "../../../util";
import { RootState } from "../../store";

interface CartState {
    cartItems: IProudct[];
}

const initialState: CartState = {
    cartItems: [],
};

const cartSlice = createSlice({
  name: "cart", // ** Attached with Store
  initialState,
  reducers: {
    addtoCartAction: (state, actionPayLoad: PayloadAction<IProudct>) => {
      state.cartItems = addItemToShopping(state.cartItems, actionPayLoad.payload);
    }
  },
});

export const { addtoCartAction } = cartSlice.actions;
export const  cartSelector = (({cart}: RootState) => cart);



export default cartSlice.reducer;
