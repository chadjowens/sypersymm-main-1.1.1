import { create } from 'zustand';
import { ThemeContextType } from '../types';

export const useThemeStore = create<ThemeContextType>((set) => ({
  isDarkMode: true,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));