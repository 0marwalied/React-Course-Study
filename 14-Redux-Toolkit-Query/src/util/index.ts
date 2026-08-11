import { IProudct } from "../interfaces";

export const addItemToShopping = (cartItems: IProudct[], product: IProudct) => {
  // Exits Increase Qty
  const exits = cartItems.find((item) => item.id == product.id); //True / False

  if (exits) {
    return cartItems.map((item) =>
      item.id == product.id ? { ...item, qty: item.qty + 1 } : item,
    );
  }
  return [...cartItems, { ...product, qty: 1 }];
  // Not Exits  => add to product
};
