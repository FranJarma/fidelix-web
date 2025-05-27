import { SIDEBAR_ROUTES, type SidebarGroup } from "../constants/routes";

export function getSidebarRoutesWithoutLogout(sidebarRoutes: SidebarGroup[]) {
  return sidebarRoutes.map(group => ({
    ...group,
    routes: group.routes.filter(route => route.id !== SIDEBAR_ROUTES.LOGOUT),
  }));
}

export function getLogoutRoute(sidebarRoutes: SidebarGroup[]) {
  return sidebarRoutes
    .flatMap(group => group.routes)
    .find(route => route.id === SIDEBAR_ROUTES.LOGOUT);
}

export function isActiveRoute(path: string, currentPathname: string): boolean {
  return currentPathname.startsWith(path);
}
