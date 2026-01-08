import type { ICategory, IProduct } from "../interfaces";
import { handleDesciption, renderColors } from "../util";
import Image from "./Image";
import Button from "./ui/Button";
interface IProps {
  product: IProduct;
  setEditedProduct: (product: IProduct) => void;
  openEditModal: () => void;
  setTempColors: (colors: string[]) => void;
  removeItem: (product: IProduct) => void;
  productIdx: number;
  setProductIdx: (idx: number) => void;
  setSelectedCategory: (category: ICategory) => void;
}

const handlePrice = (price: string) => {
  const len = price.length;
  let idx = ((len % 3) - 1 + 3) % 3;
  let newPrice = "";
  for (let i = 0; i < len; i++) {
    newPrice = newPrice + price[i];
    if (idx === i && i != len - 1) {
      newPrice = newPrice + ",";
      idx += 3;
    }
  }
  return newPrice;
};

const ProductCard = ({
  product,
  setEditedProduct,
  openEditModal,
  setTempColors,
  removeItem,
  productIdx,
  setProductIdx,
  setSelectedCategory,
}: IProps) => {
  const { imageURL, title, id, description, colors, price, category } = product;
  const renderdedColors = renderColors(colors),
    handldedDesciption = handleDesciption(description);

  function onEdit(): void {
    setEditedProduct(product);
    setTempColors(product.colors);
    setProductIdx(productIdx);
    setSelectedCategory({ ...product.category, id: "" } as ICategory);
    openEditModal();
  }

  return (
    <div className="border rounded-md p-2 flex flex-col gap-3" key={id}>
      <Image imageUrl={imageURL} alt={"Product Name"} className="h-full" />

      <h3 className="font-bold">{title}</h3>

      <p className="text-sm">{handldedDesciption}</p>

      <ul className="flex space-x-1 h-10">{renderdedColors}</ul>

      <div className="flex items-center justify-between">
        <p className="text-md font-bold text-blue-700">${handlePrice(price)}</p>
        <div className="flex items-center gap-1">
          <Image
            imageUrl={category.imageURL || "#"}
            alt="Publisher"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      <div className="flex justify-between gap-2">
        <Button color="blue" onClick={onEdit}>
          EDIT
        </Button>
        <Button color="red" onClick={() => removeItem(product)}>
          REMOVE
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
