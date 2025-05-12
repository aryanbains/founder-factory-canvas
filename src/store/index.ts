
import { create } from 'zustand';

type AppState = {
  isMenuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
  toggleMenu: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export const useAppStore = create<AppState>((set) => ({
  isMenuOpen: false,
  setMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  isDarkMode: true, // Default to dark mode
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
