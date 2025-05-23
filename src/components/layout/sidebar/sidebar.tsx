import { Box, Button, Flex, Icon, Separator, Text, VStack } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

import { sidebarRoutes } from "./constants/routes";
import { useSidebarStore } from "./hooks/useSidebarStore";
import { Tooltip } from "../../ui/tooltip";

const Sidebar = () => {
  const { isCollapsed, toggleCollapse } = useSidebarStore();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Flex
      bg="white"
      borderColor="gray.100"
      borderRight="1px solid"
      direction="column"
      height="100vh"
      p={3}
      transition="width 0.2s"
      width={isCollapsed ? "72px" : "240px"}
    >
      <Flex justify="flex-end" mb={4}>
        <Button aria-label="Toggle Sidebar" size="sm" variant="ghost" onClick={toggleCollapse}>
          <Icon as={isCollapsed ? FiChevronRight : FiChevronLeft} />
        </Button>
      </Flex>

      <VStack align="stretch" flex="1" gap={4}>
        {sidebarRoutes.map((group, i) => (
          <Box key={i}>
            {group.title && !isCollapsed && (
              <Text color="gray.500" fontSize="xs" mb={1} px={2}>
                {group.title.toUpperCase()}
              </Text>
            )}
            <VStack align="stretch" gap={1}>
              {group.routes.map(route => {
                const isActive = location.pathname.startsWith(route.path);
                const item = (
                  <Flex
                    _hover={{ bg: "gray.50" }}
                    align="center"
                    bg={isActive ? "gray.100" : "transparent"}
                    borderRadius="md"
                    color={isActive ? "brand.500" : "gray.700"}
                    cursor="pointer"
                    gap={3}
                    px={3}
                    py={2}
                    transition="all 0.15s"
                    onClick={() => navigate(route.path)}
                  >
                    <Icon as={route.icon} boxSize={5} />
                    {!isCollapsed && <Text fontSize="sm">{route.label}</Text>}
                  </Flex>
                );
                return isCollapsed ? (
                  <Tooltip content="">
                    <Box key={route.path}>{item}</Box>
                  </Tooltip>
                ) : (
                  <Box key={route.path}>{item}</Box>
                );
              })}
            </VStack>
            {i !== sidebarRoutes.length - 1 && <Separator my={3} />}
          </Box>
        ))}
      </VStack>
    </Flex>
  );
};

export default Sidebar;
