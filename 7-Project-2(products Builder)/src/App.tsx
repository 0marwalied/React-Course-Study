import { useState, type ChangeEvent } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import Input from "./components/ui/Input";
import { addNewElement } from "./util";

const App = () => {
  //State
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({
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
  });

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

  //Render
  const renderFormInputs = formInputsList.map(function (input) {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={input.id} className="font-medium">
          {input.label}
        </label>
        <Input
          name={input.name}
          id={input.id}
          type="text"
          value={product[`${input.name}`]}
          onChange={onChangeHandler}
        />
      </div>
    );
  });
  const renderProductList = productList.map(function (product) {
    return <ProductCard product={product} />;
  });

  return (
    <>
      <main className="container mx-auto p-18 space-y-2">
        <Button color="red" width="full" onClick={openModal}>
          ADD
        </Button>

        <Modal isOpen={isOpen} title="ADD New Element" closeModal={closeModal}>
          <form className="space-y-3 mt-2" onSubmit={(e) => e.preventDefault()}>
            {renderFormInputs}
            <div className="flex space-x-2">
              <Button
                color="blue"
                onClick={() => {
                  addNewElement(product);
                  closeModal();
                }}
              >
                Submit
              </Button>
              <Button color="red" onClick={closeModal}>
                CLOSE
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
