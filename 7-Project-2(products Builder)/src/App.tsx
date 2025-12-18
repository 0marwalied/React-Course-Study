import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { productList } from "./data";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <main className="container mx-auto p-18">
        <Button
          color="red"
          width="fit"
          className="mb-2"
          onClick={() => setIsOpen(true)}
        >
          ADD
        </Button>
        <Modal
          isOpen={isOpen}
          title="ADD New Element"
          closeModal={closeModal}
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {productList.map(function (product) {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </main>
    </>
  );
};
export default App;
