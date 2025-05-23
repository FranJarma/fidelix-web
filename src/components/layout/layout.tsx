import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

const Layout = () => {
  return (
    <Flex direction="column" height="100vh" bg="gray.50">
      <Header />
      <Flex flex="1" overflow="hidden">
        <Sidebar />
        <Box as="main" flex="1" p={6} overflowY="auto" bg="gray.50">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
