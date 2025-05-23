import type { IconType } from "react-icons";
import { FiHome, FiUsers, FiGift, FiSettings, FiLogOut } from "react-icons/fi";

export type SidebarRoute = {
  icon: IconType;
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
      { label: "Dashboard", icon: FiHome, path: "/" },
      { label: "Clientes", icon: FiUsers, path: "/clientes" },
      { label: "Promociones", icon: FiGift, path: "/promociones" },
    ],
  },
  {
    title: "Configuraciones",
    routes: [
      { label: "Configuración", icon: FiSettings, path: "/configuracion" },
      { label: "Cerrar sesión", icon: FiLogOut, path: "/" },
    ],
  },
];
