import { create } from 'zustand'

export const useStore = create((set) => ({
  sidebarOpened: false,
  activeState: "Home",
  openSidebar: () => set((state) => ( {sidebarOpened: true })),
  closeSidebar: () => set((state) => ({sidebarOpened: false})),
    setActiveState: (newState) => set(() => ({ activeState: newState }))
}))