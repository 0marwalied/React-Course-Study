import { useState } from "react";
import type { ICategory, IProduct } from "../interfaces";
import { handleDesciption, renderColors } from "../util";
import Image from "./Image";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderdedColors = renderColors(colors),
    handldedDesciption = handleDesciption(description);

  function onEdit(): void {
    setEditedProduct(product);
    setTempColors(product.colors);
    setProductIdx(productIdx);
    setSelectedCategory({ ...product.category, id: "" } as ICategory);
    openEditModal();
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  function validateTheRemove(): void {
    setIsOpen(true);
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
        <Button color="red" onClick={() => validateTheRemove()}>
          REMOVE
        </Button>
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="flex flex-col space-y-2">
          <h1 className="font-medium text-lg">
            Are you sure you want to remove this Product from your Store?
          </h1>
          <p className="text-gray-400 leading-5.5">
            Deleting this product will remove it permanently from your
            inventory. Any associated data sales history, and other related
            information will also be deleted. Please make sure this is the
            inteded action
          </p>
          <div className="flex justify-between space-x-2">
            <Button
              color="red"
              onClick={() => {
                removeItem(product);
                setIsOpen(false);
              }}
            >
              Yes, remove
            </Button>
            <Button
              color="#d1d2e0"
              textColor="black"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
