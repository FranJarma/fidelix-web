import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

const Layout = () => {
  return (
    <Flex bg="gray.50" direction="column" height="100vh">
      <Header />
      <Flex flex="1" overflow="hidden">
        <Sidebar />
        <Box as="main" bg="gray.50" flex="1" overflowY="auto" p={6}>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
