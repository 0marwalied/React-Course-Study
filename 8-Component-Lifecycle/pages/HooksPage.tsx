import { useEffect, useState } from "react";

const HooksPage = () => {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("HooksPage");
  }, [counter]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products", {
          signal,
        });
        const jsonData = await response.json();
        setProducts(jsonData.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>Counter {counter}</h1>
      <button
        className="button bg-amber-50 text-black p-2 rounded-lg"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Click me
      </button>
      {products.length > 0 ? (
        <ul>
          {products.map((product: { id: number; title: string }) => (
            <li key={product.id}>
              {product.id} - {product.title}
            </li>
          ))}
        </ul>
      ) : (
        <h2>Loading products...</h2>
      )}
    </>
  );
};
export default HooksPage;
