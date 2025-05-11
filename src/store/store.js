import { create } from 'zustand'

export const useStore = create((set) => ({
  sidebarOpened: false,
  openSidebar: () => set((state) => ( {sidebarOpened: true })),
  closeSidebar: () => set((state) => ({sidebarOpened: false}))
}))