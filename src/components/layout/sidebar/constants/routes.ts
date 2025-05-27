import type { IconType } from "react-icons";
import { FiGift, FiHome, FiLogOut, FiSettings, FiShoppingBag, FiUsers } from "react-icons/fi";

export const SIDEBAR_ROUTES = {
  DASHBOARD: "dashboard",
  EXCHANGE_POINTS: "exchange_points",
  CLIENTS: "clients",
  PROMOTIONS: "promotions",
  MY_BUSINESS: "my_business",
  LOGOUT: "logout",
} as const;

export type SidebarRouteId = (typeof SIDEBAR_ROUTES)[keyof typeof SIDEBAR_ROUTES];

export type SidebarRoute = {
  icon: IconType;
  id: SidebarRouteId;
  label: string;
  path: string;
};

export type SidebarGroup = {
  routes: SidebarRoute[];
  title?: string;
};

export const sidebarRoutes: SidebarGroup[] = [
  {
    title: "Funcionalidades",
    routes: [
      {
        id: SIDEBAR_ROUTES.DASHBOARD,
        label: "Dashboard",
        icon: FiHome,
        path: "/home",
      },
      {
        id: SIDEBAR_ROUTES.EXCHANGE_POINTS,
        label: "Canjeo de puntos",
        icon: FiGift,
        path: "/canjear-puntos",
      },
      {
        id: SIDEBAR_ROUTES.CLIENTS,
        label: "Clientes",
        icon: FiUsers,
        path: "/clientes",
      },
      {
        id: SIDEBAR_ROUTES.PROMOTIONS,
        label: "Promociones",
        icon: FiShoppingBag,
        path: "/promociones",
      },
    ],
  },
  {
    title: "Configuraciones",
    routes: [
      {
        id: SIDEBAR_ROUTES.MY_BUSINESS,
        label: "Mi negocio",
        icon: FiSettings,
        path: "/mi-negocio",
      },
      {
        id: SIDEBAR_ROUTES.LOGOUT,
        label: "Cerrar sesión",
        icon: FiLogOut,
        path: "/logout",
      },
    ],
  },
];
