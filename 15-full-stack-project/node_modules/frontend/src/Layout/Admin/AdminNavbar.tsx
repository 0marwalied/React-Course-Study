import { toaster } from "@/components/ui/toaster";
import CookieServices from "@/services/CookieServices";
import { Avatar, Button, Flex, Menu, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router";

interface NavbarProps {
  onMenuOpen: () => void;
}

const AdminNavbar = ({ onMenuOpen }: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <Flex
      as="nav"
      h="64px"
      align="center"
      px={{ base: 4, md: 6 }}
      borderBottom="1px solid"
      borderColor="border"
      position="sticky"
      top={0}
      bg="bg"
      zIndex={5}
      justifyContent={"space-between"}
    >
      {/* Mobile menu button */}
      <Button
        display={{ base: "flex", md: "none" }}
        variant="ghost"
        size="sm"
        minW="auto"
        mr={3}
        onClick={onMenuOpen}
        aria-label="Open navigation menu"
      >
        <FiMenu />
      </Button>

      <Text>Admin</Text>

      {/* User */}
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button rounded="full" variant="ghost" cursor="pointer" minW={0}>
            <Avatar.Root size="xl">
              <Avatar.Fallback name="Username" />
              <Avatar.Image src="https://avatars.githubusercontent.com/u/96862135?v=4" />
            </Avatar.Root>
          </Button>
        </Menu.Trigger>

        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item
              value="logout"
              onClick={() => {
                setTimeout(() => {
                  CookieServices.remove("jwt");
                  navigate("/login");
                  toaster.create({
                    title: "Logged out",
                    description: "You have been successfully logged out.",
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
    </Flex>
  );
};

export default AdminNavbar;
