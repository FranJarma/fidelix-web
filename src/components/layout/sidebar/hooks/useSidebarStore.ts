import { create } from "zustand";
import { persist } from "zustand/middleware";

type SidebarState = {
  isCollapsed: boolean;
  setCollapsed: (value: boolean) => void;
  toggleCollapse: () => void;
};

export const useSidebarStore = create<SidebarState>()(
  persist(
    set => ({
      isCollapsed: false,
      toggleCollapse: () => set(state => ({ isCollapsed: !state.isCollapsed })),
      setCollapsed: (value: boolean) => set({ isCollapsed: value }),
    }),
    {
      name: "sidebar-storage",
    },
  ),
);
