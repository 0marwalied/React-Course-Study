import { useAppDispatch } from "@/app/store";
import type { Product } from "@/data";
import { Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { removeFromCart } from "@/app/features/cart/cartSlice";

interface IProps {
  id: string;
  thumbnail?: Product["thumbnail"];
  title: string;
  price: number;
  quantity: number;
}

const CartDrawerItem = ({ id, thumbnail, title, price, quantity }: IProps) => {
  const fullUrl = import.meta.env.VITE_BASE_URL + thumbnail?.url;
  const dispatch = useAppDispatch();

  return (
    <>
      <Flex border="1px solid white" p="2" rounded="md" alignItems="center">
        <Image
          src={fullUrl}
          alt={title}
          w={"60px"}
          h={"60px"}
          objectFit="cover"
          rounded="full"
          mr={2}
        />
        <Stack>
          <Text fontSize="sm">{title.toUpperCase()}</Text>
          <Text fontSize="sm">Price: ${price.toFixed(2)}</Text>
          <Text fontSize="sm">Quantity: {quantity}</Text>
          <Button
            variant="solid"
            colorPalette="red"
            size="xs"
            w="fit-content"
            onClick={() => dispatch(removeFromCart(id))}
          >
            Remove
          </Button>
        </Stack>
      </Flex>
    </>
  );
};

export default CartDrawerItem;
