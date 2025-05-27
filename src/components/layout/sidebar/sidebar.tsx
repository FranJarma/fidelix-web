import { Box, Button, Flex, Icon, Image, Separator, Text, VStack } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

import { sidebarRoutes, type SidebarRoute } from "./constants/routes";
import { useSidebarStore } from "./hooks/useSidebarStore";
import {
  getSidebarRoutesWithoutLogout,
  getLogoutRoute,
  isActiveRoute,
} from "./utils/sidebar.utils";
import { Tooltip } from "../../ui/tooltip";

export default function Sidebar() {
  const { isCollapsed, toggleCollapse } = useSidebarStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const sidebarGroups = getSidebarRoutesWithoutLogout(sidebarRoutes);
  const logoutRoute = getLogoutRoute(sidebarRoutes);

  const renderItem = (route: SidebarRoute, isActive: boolean) => {
    const itemContent = (
      <Flex
        _hover={{ color: "brand.500", bg: "brand.50" }}
        align="center"
        bg={isActive ? "brand.50" : "transparent"}
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

    if (isCollapsed) {
      return (
        <Tooltip key={route.path} showArrow content={route.label}>
          <Box>{itemContent}</Box>
        </Tooltip>
      );
    }

    return <Box key={route.path}>{itemContent}</Box>;
  };

  const renderGroup = (group: any, index: number) => (
    <Box key={`group-${index}`}>
      {!isCollapsed && group.title && (
        <Text color="gray.500" fontSize="xs" mb={1} px={2}>
          {group.title.toUpperCase()}
        </Text>
      )}
      <VStack align="stretch" gap={1}>
        {group.routes.map((route: SidebarRoute) =>
          renderItem(route, isActiveRoute(route.path, pathname)),
        )}
      </VStack>
      <Separator my={3} />
    </Box>
  );

  const renderLogout = () => {
    if (!logoutRoute) return null;

    const isActive = isActiveRoute(logoutRoute.path, pathname);

    const logoutItem = (
      <Flex
        _hover={{ bg: "red.100", color: "red.700" }}
        align="center"
        bg={isActive ? "red.50" : "transparent"}
        borderRadius="md"
        color={isActive ? "red.600" : "gray.700"}
        cursor="pointer"
        gap={3}
        px={3}
        py={2}
        transition="all 0.15s"
        onClick={() => navigate(logoutRoute.path)}
      >
        <Icon as={logoutRoute.icon} boxSize={5} />
        {!isCollapsed && <Text fontSize="sm">{logoutRoute.label}</Text>}
      </Flex>
    );

    if (isCollapsed) {
      return (
        <Tooltip showArrow content={logoutRoute.label}>
          <Box>{logoutItem}</Box>
        </Tooltip>
      );
    }

    return <Box>{logoutItem}</Box>;
  };

  return (
    <Flex
      bg="white"
      direction="column"
      p={3}
      transition="width 0.2s"
      width={isCollapsed ? "72px" : "240px"}
    >
      <Flex align="center" justify="space-between" mb={4}>
        <Image
          src="logo-fidelix.webp"
          alt="Logo"
          width={200}
          marginLeft={2}
          display={isCollapsed ? "none" : "flex"}
        />
        <Button aria-label="Toggle Sidebar" size="sm" variant="subtle" onClick={toggleCollapse}>
          <Tooltip content={isCollapsed ? "Mostrar" : "Ocultar"}>
            <Icon as={isCollapsed ? FiChevronRight : FiChevronLeft} />
          </Tooltip>
        </Button>
      </Flex>

      <VStack align="stretch" flex="1" gap={4}>
        {sidebarGroups.map(renderGroup)}
      </VStack>

      {renderLogout()}
    </Flex>
  );
}
