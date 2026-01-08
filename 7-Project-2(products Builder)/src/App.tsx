import { useState, type ChangeEvent, type FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { categories, colors, formInputsList, productList } from "./data";
import Input from "./components/ui/Input";
import type { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";

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
    colors: "",
  };
  //State
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [errors, setErrors] = useState(defaultErrosObj);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [editedProduct, setEditedProduct] =
    useState<IProduct>(defaultProductObj);

  // Handler
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const closeEditModal = () => setIsEditOpen(false);
  const openEditModal = () => {
    setIsEditOpen(true);
  };

  const removeItem = (product: IProduct) => {
    console.log("here");
    const newProducts = products.filter((prod) => {
      return prod.id != product.id;
    });
    console.log(newProducts);
    setProducts(newProducts);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });

    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newProduct = {
      ...product,
      id: uuid(),
      category: selectedCategory,
      colors: tempColors,
    };
    setProduct(newProduct);
    const errors = productValidation(newProduct);
    setErrors(errors);
    const hasErrorMsg = !Object.values(errors).every((value) => value === "");
    if (hasErrorMsg) return;
    setProducts((prev) => [newProduct, ...prev]);
    setProduct(defaultProductObj);
    setTempColors([]);
    setErrors(defaultErrosObj);
    closeModal();
  };

  const onSubmitEditProductHanlder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newProduct = {
      ...editedProduct,
      category: selectedCategory,
      colors: tempColors,
    };
    setProduct(newProduct);
    const errors = productValidation(newProduct);
    setErrors(errors);
    const hasErrorMsg = !Object.values(errors).every((value) => value === "");
    if (hasErrorMsg) return;
    const tempProducts = products.map((prod) =>
      prod.id === newProduct.id ? newProduct : prod
    );
    setProducts(tempProducts);
    closeEditModal();
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    setErrors(defaultErrosObj);
    closeEditModal();
    closeModal();
  };

  //Render
  const renderFormInputs = (product: IProduct) =>
    formInputsList.map(function (input) {
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

  const renderProductColor = (colors: string[]) => {
    return colors.map((color) => (
      <CircleColor
        color={color}
        key={color}
        onClick={() => {
          if (tempColors.includes(color)) {
            setTempColors((prev) => prev.filter((item) => item !== color));
            return;
          } else setTempColors((prev) => [...prev, color]);
        }}
      />
    ));
  };

  const renderProductList = products.map(function (product) {
    return (
      <ProductCard
        product={product}
        key={product.id}
        setEditedProduct={setEditedProduct}
        openEditModal={openEditModal}
        setTempColors={setTempColors}
        removeItem={removeItem}
      />
    );
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
        {/* Add New Element Modal */}
        <Modal isOpen={isOpen} title="ADD New Element" closeModal={closeModal}>
          <form className="space-y-3 mt-2" onSubmit={onSubmitHandler}>
            {renderFormInputs(product)}

            <Select
              selected={{ ...editedProduct.category, id: uuid() }}
              setSelected={setSelectedCategory}
            />

            <div className="flex gap-1 flex-wrap">
              {tempColors.map((color) => (
                <span
                  key={color}
                  className="p-1 text-white rounded-md"
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>

            <ul className="flex space-x-2 flex-wrap space-y-1">
              {renderProductColor(colors)}
            </ul>
            {!tempColors.length && <ErrorMessage msg={errors["colors"]} />}

            <div className="flex space-x-2">
              <Button color="blue">Submit</Button>
              <Button color="red" type="button" onClick={onCancel}>
                Cancel
              </Button>
            </div>
          </form>
        </Modal>

        {/* Edit Current Element Modal */}
        <Modal
          isOpen={isEditOpen}
          title="Edit This Product"
          closeModal={closeEditModal}
        >
          <form
            className="space-y-3 mt-2"
            onSubmit={onSubmitEditProductHanlder}
          >
            {renderFormInputs(editedProduct)}

            <Select
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />

            <div className="flex gap-1 flex-wrap">
              {tempColors.map((color) => (
                <span
                  key={color}
                  className="p-1 text-white rounded-md"
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>

            <ul className="flex space-x-2 flex-wrap space-y-1">
              {renderProductColor(editedProduct.colors)}
            </ul>
            {!tempColors.length && <ErrorMessage msg={errors["colors"]} />}

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
