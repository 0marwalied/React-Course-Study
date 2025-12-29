import { useState, type ChangeEvent, type FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { colors, formInputsList, productList } from "./data";
import Input from "./components/ui/Input";
import type { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";

const App = () => {
  const defaultProductObj = {
    id: "",
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  const defaultErrosObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };
  //State
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [errors, setErrors] = useState(defaultErrosObj);
  const [tempColors, setTempColors] = useState<string[]>([]);

  // Handler
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = productValidation(product);
    setErrors(errors);
    const hasErrorMsg = !Object.values(errors).every((value) => value === "");
    if (hasErrorMsg) return;
    setProducts((prev) => [
      ...prev,
      {
        ...product,
        colors: tempColors,
        id: uuid(),
      },
    ]);
    setProduct(defaultProductObj);
    setTempColors([]);
    setErrors(defaultErrosObj);
    closeModal();
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    setErrors(defaultErrosObj);
    closeModal();
  };

  //Render
  const renderFormInputs = formInputsList.map(function (input) {
    return (
      <div className="flex flex-col gap-1" key={input.id}>
        <label htmlFor={input.id} className="font-medium">
          {input.label}
        </label>
        <Input
          name={input.name}
          id={input.id}
          type="text"
          value={product[input.name]}
          onChange={onChangeHandler}
        />
        <ErrorMessage msg={errors[input.name]} />
      </div>
    );
  });
  const renderProductColor = colors.map((color) => (
    <CircleColor
      color={color}
      key={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors(tempColors.filter((item) => item != color));
          return;
        } else setTempColors((prev) => [...prev, color]);
      }}
    />
  ));
  const renderProductList = products.map(function (product) {
    return <ProductCard product={product} key={product.id} />;
  });

  return (
    <>
      <main className="container mx-auto p-18 space-y-2">
        <Button
          color="red"
          width="full"
          onClick={() => {
            setProduct(defaultProductObj);
            const errors = defaultErrosObj;
            setErrors(errors);
            openModal();
            setTempColors([]);
          }}
        >
          ADD
        </Button>

        <Modal isOpen={isOpen} title="ADD New Element" closeModal={closeModal}>
          <form className="space-y-3 mt-2" onSubmit={onSubmitHandler}>
            {renderFormInputs}
            <div className="flex gap-1 flex-wrap">
              {tempColors.map((color) => (
                <span
                  className="p-1 text-white rounded-md"
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>
            <ul className="flex space-x-2 flex-wrap space-y-1">
              {renderProductColor}
            </ul>
            <div className="flex space-x-2">
              <Button color="blue">Submit</Button>
              <Button color="red" type="button" onClick={onCancel}>
                Cancel
              </Button>
            </div>
          </form>
        </Modal>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {renderProductList}
        </div>
      </main>
    </>
  );
};
export default App;
