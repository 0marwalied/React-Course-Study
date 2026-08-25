import { Button, Card, Image, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { Link } from "react-router";
import type { Product } from "@/data";

const ProductCard = (product: Product) => {
  const { colorMode } = useColorMode();

  const { title, price, thumbnail, description } = product;

  return (
    <Card.Root border={"1px solid #a8b5c8"} bg="none">
      <Image
        src={`${import.meta.env.VITE_BASE_URL}${thumbnail?.url}`}
        alt="Green double couch with wooden legs"
        boxSize="200px"
        rounded="50%"
        mx="auto"
        mt="5px"
      />
      <Card.Body gap="2">
        <Card.Title textAlign={"center"}>{title}</Card.Title>
        <Card.Description fontSize="sm" textAlign="center">
          {description}
        </Card.Description>
        <Text fontSize="3xl" color="purple.600" textAlign="center">
          ${price}
        </Text>
      </Card.Body>
      <Card.Footer>
        <Button
          as={Link}
          to={`/products/${product.id}`}
          bg={`${colorMode === "light" ? "#e6f3fd" : "#9f7aea"}`}
          color={`${colorMode !== "light" ? "#e6f3fd" : "#9f7aea"}`}
          size="xl"
          variant="outline"
          border="none"
          py="5"
          overflow="hidden"
          w="full"
          _hover={{
            bg: `${colorMode !== "light" ? "#e6f3fd" : "#9f7aea"}`,
            color: `${colorMode === "light" ? "#e6f3fd" : "#9f7aea"}`,
            border: "transparent",
          }}
        >
          Buy now
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductCard;
