import ProductCard from "@/components/ProductCard";
import type { Product } from "@/data";
import { Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";

const ProductsPage = () => {
  const getProductList = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/products?populate=category,thumbnail`,
    );
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProductList,
  });

  if (isLoading)
    return (
      <Grid
        margin="30px"
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap="6"
      >
        {Array.from({ length: 6 }).map((_, idx) => (
          <ProductCardSkeleton key={idx} />
        ))}
      </Grid>
    );
  if (error) return <h3>Something went wrong {error.message}</h3>;

  return (
    <Grid
      margin="30px"
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gap="6"
    >
      {data.data.map((product: Product) => (
        <ProductCard key={product!.id} {...product!} />
      ))}
    </Grid>
  );
};

export default ProductsPage;
