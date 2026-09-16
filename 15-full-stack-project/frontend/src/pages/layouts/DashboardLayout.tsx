import { useState } from "react";

import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@/Layout/Admin/AdminSidebar";
import AdminNavbar from "@/Layout/Admin/AdminNavbar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Flex minH="100vh">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main area */}
        <Box flex="1" ml={{ base: 0, md: "280px" }} minW={0}>
          <AdminNavbar onMenuOpen={() => setSidebarOpen(true)} />
          <Box p={{ base: 4, sm: 6, md: 8 }}>
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default DashboardLayout;
