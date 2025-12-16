import type { IProduct } from "../interfaces";
import { handleDesciption, renderColors } from "../util";
import Button from "./ui/Button";
import Image from "./Image";

interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  const { imageURL, title, id, description, colors, price, category } = product;
  return (
    <div className="border rounded-md p-2 flex flex-col gap-3" key={id}>
      <Image imageUrl={imageURL} alt={"Product Name"} className="h-full" />

      <h3 className="font-bold">{title}</h3>

      <p className="text-sm">{handleDesciption(description, 40)}</p>

      <ul className="flex space-x-1 h-10">{renderColors(colors, 5)}</ul>

      <div className="flex items-center justify-between">
        <p className="text-md font-bold text-blue-700">${price}</p>
        <div className="flex items-center gap-1">
          <Image
            imageUrl={category.imageURL}
            alt="Publisher"
            className="w-10 h-10 rounded-full"
          />
          <h4 className="font-medium">{category.name}</h4>
        </div>
      </div>

      <div className="flex justify-between gap-2">
        <Button color={"blue"}>EDIT</Button>
        <Button color={"red"}>REMOVE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
