import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import Input from "./components/ui/Input";

const App = () => {
  //Render
  const renderFormInputs = formInputsList.map(function (input) {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={input.id} className="font-medium">
          {input.label}
        </label>
        <Input name={input.name} id={input.id} type="text" />
      </div>
    );
  });
  const renderProductList = productList.map(function (product) {
    return <ProductCard product={product} />;
  });

  //State
  const [isOpen, setIsOpen] = useState(false);

  // Handler
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <main className="container mx-auto p-18 space-y-2">
        <Button color="red" width="full" onClick={openModal}>
          ADD
        </Button>

        <Modal isOpen={isOpen} title="ADD New Element" closeModal={closeModal}>
          <form className="space-y-3 mt-2">
            {renderFormInputs}
            <div className="flex space-x-2">
              <Button color="blue">EDIT</Button>
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
