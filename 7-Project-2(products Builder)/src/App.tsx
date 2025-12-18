import ProductCard from "./components/ProductCard";
import { productList } from "./data";

const App = () => {
  return (
    <>
      <main className="container mx-auto p-18">
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
