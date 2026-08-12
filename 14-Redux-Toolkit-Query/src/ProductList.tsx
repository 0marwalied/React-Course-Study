import ProductCard from "./components/ProductCard";
import { IProudct } from "./interfaces";
import { useGetProductListQuery } from "./app/features/products/productsSlice";

const ProductList = () => {
  const {
    data,
    isLoading: loading,
    isError: error,
  } = useGetProductListQuery({ page: 1, limit: 10 });


  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      {data!.products.map((product: IProudct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
