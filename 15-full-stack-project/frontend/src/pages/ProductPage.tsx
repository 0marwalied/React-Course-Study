import ProductDetailsSkeleton from "@/components/ProductDetailsSkeleton";
// import { useColorMode } from "@/components/ui/color-mode";
import { Button, Card, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
import Image from "../components/ui/Image";
import type { Product } from "@/data";
import { useColorMode } from "@/components/ui/color-mode";

const ProductPage = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  const getProduct = async (): Promise<Product> => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/products/${id}?populate=thumbnail,category`,
    );
    return data.data;
  };

  const { isLoading, data: product } = useQuery({
    queryKey: ["product", id],
    queryFn: getProduct,
  });

  const goBack = () => navigate(-1);

  console.log(product);

  useEffect(() => {
    document.title = `Product Store | Product ${id} page`;
  }, [id]);

  if (isLoading) return <ProductDetailsSkeleton />;

  return (
    <>
      <Flex
        alignItems="center"
        maxW="sm"
        mx="auto"
        my="7"
        fontSize="lg"
        cursor="pointer"
        onClick={goBack}
      >
        <BsArrowLeft />
        <Text ml={2}> Back</Text>
      </Flex>
      <Card.Root maxW="sm" mx="auto" border="1px solid #a8b5c8" bg="none">
        <Card.Body>
          <Image
            src={`${import.meta.env.VITE_BASE_URL}${product?.thumbnail?.url}`}
            alt={`${product?.title}`}
            height="200px"
            width="full"
            style={{ borderRadius: "5px" }}
          />
          <Stack mt="6" spaceX="3">
            <Heading size="md" textAlign="center">
              {product?.title}
            </Heading>

            <Text textAlign="center">{product?.description}</Text>
            <Text color="blue.100" fontSize="2xl" textAlign="center">
              {product?.category.title}
            </Text>
            <Text color="blue.300" fontSize="2xl" textAlign="center">
              {product?.price.toFixed(2)}$
            </Text>
          </Stack>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="solid"
            colorScheme="purple"
            onClick={() => {}}
            w="full"
            size="lg"
            bg={colorMode === "light" ? "#e6f3fd" : "#9f7aea"}
            color={colorMode !== "light" ? "#e6f3fd" : "#9f7aea"}
            _hover={{
              bg: colorMode !== "light" ? "#e6f3fd" : "#9f7aea",
              color: colorMode === "light" ? "#e6f3fd" : "#9f7aea",
            }}
            p="8"
            textTransform="uppercase"
          >
            Add to Cart
          </Button>
        </Card.Footer>
      </Card.Root>
    </>
  );
};

export default ProductPage;
