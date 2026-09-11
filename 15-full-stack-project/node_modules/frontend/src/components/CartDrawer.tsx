"use client";

import { closeDrawer } from "@/app/features/global/globalSlice";
import { useAppDispatch, type RootState } from "@/app/store";
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CartDrawerItem from "./CartDrawerItem";
import type { Product } from "@/data";
import { clearCart } from "@/app/features/cart/cartSlice";

interface IProps {
  open: boolean;
}

const CartDrawer = ({ open }: IProps) => {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.cart.cartProducts);

  return (
    <Drawer.Root open={open} onInteractOutside={() => dispatch(closeDrawer())}>
      <Drawer.Trigger asChild></Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Your Shopping Cart</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body gap={3} display="flex" flexDirection="column">
              {products.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                products.map((product: Product) => {
                  const { id, thumbnail, title, price, quantity } = product;
                  return (
                    <CartDrawerItem
                      id={id}
                      thumbnail={thumbnail}
                      title={title}
                      price={price}
                      quantity={quantity}
                    />
                  );
                })
              )}
            </Drawer.Body>
            <Drawer.Footer>
              <Button
                colorPalette="red"
                variant="outline"
                onClick={() => dispatch(clearCart())}
              >
                Clear All
              </Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger
              asChild
              onClick={() => dispatch(closeDrawer())}
            >
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default CartDrawer;
