import {
  Box,
  Button,
  Drawer,
  Flex,
  Input,
  InputGroup,
  Separator,
  Text,
} from "@chakra-ui/react";

import {
  FiBookmark,
  FiFileText,
  FiGrid,
  FiHelpCircle,
  FiPieChart,
  FiSearch,
  FiSettings,
  FiX,
} from "react-icons/fi";

import { Link, NavLink } from "react-router";

interface SidebarContentProps {
  onClose?: () => void;
}

const SidebarContent = ({ onClose }: SidebarContentProps) => {
  return (
    <Flex direction="column" w="100%" h="100%" p={{ base: 4, md: 6 }}>
      {/* Logo */}
      <Flex mb={6} align="center" justify="space-between">
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          letterSpacing="-0.03em"
        >
          Admin Dashboard
        </Text>

        {onClose && (
          <Button
            display={{ base: "flex", md: "none" }}
            variant="ghost"
            size="sm"
            minW="auto"
            onClick={onClose}
            aria-label="Close menu"
          >
            <FiX />
          </Button>
        )}
      </Flex>

      {/* Search */}
      <InputGroup mb={6} startElement={<FiSearch />}>
        <Input placeholder="Search" />
      </InputGroup>

      {/* Main navigation */}
      <Flex direction="column" gap={1}>
        <Link to="/dashboard" onClick={onClose}>
          <Button w="100%" variant="ghost" justifyContent="flex-start">
            <Flex align="center" gap={3}>
              <FiGrid />
              <Text>Home</Text>
            </Flex>
          </Button>
        </Link>

        <NavLink to="/dashboard/products" onClick={onClose}>
          <Button w="100%" variant="ghost" justifyContent="flex-start">
            <Flex align="center" gap={3}>
              <FiPieChart />
              <Text>Products</Text>
            </Flex>
          </Button>
        </NavLink>

        <Link to="/dashboard/categories" onClick={onClose}>
          <Button w="100%" variant="ghost" justifyContent="space-between">
            <Flex align="center" gap={3}>
              <FiFileText />
              <Text>Categories</Text>
            </Flex>
          </Button>
        </Link>

        <NavLink to="/dashboard/favorites" onClick={onClose}>
          <Button variant="ghost" justifyContent="flex-start">
            <Flex align="center" gap={3}>
              <FiBookmark />
              <Text>Favorites</Text>
            </Flex>
          </Button>
        </NavLink>
      </Flex>

      {/* Push bottom section down */}
      <Box flex={1} />

      <Separator my={4} />

      {/* Bottom navigation */}
      <Flex direction="column" gap={1}>
        <Button variant="ghost" justifyContent="flex-start">
          <Flex align="center" gap={3}>
            <FiHelpCircle />
            <Text>Help Center</Text>
          </Flex>
        </Button>

        <Button variant="ghost" justifyContent="flex-start">
          <Flex align="center" gap={3}>
            <FiSettings />
            <Text>Settings</Text>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
};

interface SidebarProps {
  isOpen?: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <Box
        as="aside"
        position="fixed"
        left={0}
        top={0}
        w="280px"
        h="100vh"
        borderRight="1px solid"
        borderColor="border"
        display={{ base: "none", md: "block" }}
        zIndex={10}
      >
        <SidebarContent />
      </Box>

      {/* Mobile Sidebar */}
      <Drawer.Root
        open={isOpen}
        onOpenChange={(details) => {
          if (!details.open) {
            onClose();
          }
        }}
        placement="start"
      >
        <Drawer.Backdrop />

        <Drawer.Positioner>
          <Drawer.Content maxW="280px">
            <SidebarContent onClose={onClose} />
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
};

export default Sidebar;
