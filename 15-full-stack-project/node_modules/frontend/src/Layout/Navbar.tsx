import type { ReactNode } from "react";

import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";
import { NavLink as RouterLink, useNavigate } from "react-router";
import CookieServices from "@/services/CookieServices";
import { toaster } from "@/components/ui/toaster";
import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "@/app/store";
import { openDrawer } from "@/app/features/global/globalSlice";

const Links = ["About", "Products"];
const StyledRouterLink = chakra(RouterLink);

const NavLink = ({ children }: { children: ReactNode }) => (
  <StyledRouterLink
    as={RouterLink}
    px={2}
    py={1}
    to={`/${children!.toString().toLowerCase()}`}
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </StyledRouterLink>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const token = CookieServices.get("jwt");
  const products = useSelector((state: RootState) => state.cart.cartProducts);
  const dispatch = useAppDispatch();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack gap={8} alignItems="center">
          <RouterLink to="/">Home</RouterLink>
          <HStack as="nav" gap={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link.toString().toLowerCase()}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>

        <Flex alignItems="center">
          <Stack direction="row" gap={7} alignItems="center">
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <BsMoon /> : <BsSun />}
            </Button>

            {token ? (
              <Menu.Root>
                <Button onClick={() => dispatch(openDrawer())}>
                  Card ({products.length})
                </Button>
                <Menu.Trigger asChild>
                  <Button
                    rounded="full"
                    variant="ghost"
                    cursor="pointer"
                    minW={0}
                  >
                    <Avatar.Root size="xl">
                      <Avatar.Fallback name="Username" />
                      {/* <Avatar.Image src="https://api.dicebear.com/9.x/micah/svg?seed=username" /> */}
                      <Avatar.Image src="https://avatars.githubusercontent.com/u/96862135?v=4" />
                    </Avatar.Root>
                  </Button>
                </Menu.Trigger>

                <Menu.Positioner>
                  <Menu.Content>
                    {/* <Box p={4}>
                    <Flex direction="column" align="center" gap={3}>
                      <Avatar.Root size="2xl">
                        <Avatar.Fallback name="Username" />
                        <Avatar.Image src="https://api.dicebear.com/9.x/micah/svg?seed=username" />
                      </Avatar.Root>
                    </Flex>
                  </Box> */}

                    <Menu.Item value="servers">Your Servers</Menu.Item>
                    <Menu.Item value="settings">Account Settings</Menu.Item>
                    <Menu.Item
                      value="logout"
                      onClick={() => {
                        setTimeout(() => {
                          CookieServices.remove("jwt");
                          navigate("/login");
                          toaster.create({
                            title: "Logged out",
                            description:
                              "You have been successfully logged out.",
                            type: "success",
                            closable: true,
                          });
                        }, 1000);
                      }}
                    >
                      Logout
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Menu.Root>
            ) : (
              <NavLink>Login</NavLink>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
