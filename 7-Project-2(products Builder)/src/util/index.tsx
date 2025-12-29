import { v4 as uuid } from "uuid";
import type { IProduct } from "../interfaces";
import { productList } from "../data";
import CircleColor from "../components/CircleColor";
export const renderColors = (colors: string[], max: number = 5) => {
  const remain = colors.length - max;
  return (
    <>
      {colors.map((color, index) =>
        index < max ? <CircleColor key={index} color={color} /> : null
      )}
      {remain > 0 && <p>+{remain}</p>}
    </>
  );
};

export const handleDesciption = (
  description: string,
  max: number = 35
): string => {
  if (description.length > max) return `${description.substring(0, max)}...`;
  return description;
};

export function addNewElement(product: IProduct) {
  product.id = uuid();
  product.category.imageURL = product.category.imageURL || product.imageURL;
  productList.unshift(product);
}

export function removeThisElement(product: IProduct, productList: IProduct[]) {
  const index = productList.findIndex((p) => p.id === product.id);
  if (index !== -1) {
    productList.splice(index, 1);
  }
}
