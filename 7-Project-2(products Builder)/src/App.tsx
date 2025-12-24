import { useState, type ChangeEvent, type FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import Input from "./components/ui/Input";
import type { IProduct } from "./interfaces";
import { productValidation } from "./validation";

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
  //State
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);

  // Handler
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = productValidation(product);
    const hasErrorMsg = !Object.values(errors).every((value) => value === "");
    if (hasErrorMsg) return;
  };
  const onCancel = () => {
    console.log("Canceled");
    setProduct(defaultProductObj);
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
      </div>
    );
  });
  const renderProductList = productList.map(function (product) {
    return <ProductCard product={product} key={product.id} />;
  });

  return (
    <>
      <main className="container mx-auto p-18 space-y-2">
        <Button color="red" width="full" onClick={openModal}>
          ADD
        </Button>

        <Modal isOpen={isOpen} title="ADD New Element" closeModal={closeModal}>
          <form className="space-y-3 mt-2" onSubmit={onSubmitHandler}>
            {renderFormInputs}
            <div className="flex space-x-2">
              <Button color="blue">Submit</Button>
              <Button color="red" onClick={onCancel}>
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
