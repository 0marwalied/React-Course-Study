import ProductCard from "@/components/ProductCard";
import type { Product } from "@/data";
import { Grid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/products?populate=category,thumbnail")
      .then((res) => setProductList(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid
      margin="30px"
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gap="6"
    >
      {productList.map((product: Product) => (
        <ProductCard key={product!.id} {...product!} />
      ))}
    </Grid>
  );
};

export default ProductsPage;
