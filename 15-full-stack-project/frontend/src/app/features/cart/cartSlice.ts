import { toaster } from "@/components/ui/toaster";
import type { Product } from "@/data";
import { createSlice } from "@reduxjs/toolkit";

interface cartState {
  cartProducts: Product[];
}

const initialState: cartState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload as Product;
      const existingProduct = state.cartProducts.find(
        (p) => p.id === product.id,
      );
      if (!existingProduct) {
        toaster.create({
          title: "Product added to cart",
          description: `${product.title} has been added to your cart.`,
          type: "success",
        });
        state.cartProducts.push({ ...product, quantity: 1 });
        return;
      }
      existingProduct.quantity += 1;
      toaster.create({
        title: "Product quantity updated",
        description: `The quantity of ${product.title} has been updated in your cart.`,
        type: "info",
      });
    },
    removeFromCart: (state, action) => {
      const productId = action.payload as string;
      const existingProductIndex = state.cartProducts.findIndex(
        (p) => p.id === productId,
      );
      if (existingProductIndex !== -1) {
        state.cartProducts.splice(existingProductIndex, 1);
        toaster.create({
          title: "Product removed from cart",
          description: `The product has been removed from your cart.`,
          type: "info",
        });
      }
    },
    clearCart: (state) => {
      state.cartProducts = [];
      toaster.create({
        title: "Cart cleared",
        description: "All products have been removed from your cart.",
        type: "info",
      });
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
