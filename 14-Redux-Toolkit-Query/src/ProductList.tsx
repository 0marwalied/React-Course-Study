import { useEffect } from "react";
import ProductCard from "./components/ProductCard";
import useCustomQuery from "./hooks/useCustomQuery";
import { IProudct } from "./interfaces";
import { getProductList } from "./app/features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { productsList, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      {productsList.map((product: IProudct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
