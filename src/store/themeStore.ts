import { create } from 'zustand';
import { ThemeContextType } from '../types';

// Apply dark mode class to HTML element initially
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('dark');
}

export const useThemeStore = create<ThemeContextType>((set) => ({
  isDarkMode: true,
  toggleTheme: () => set((state) => {
    const newDarkMode = !state.isDarkMode;
    
    // Apply or remove dark mode class on HTML element
    if (typeof document !== 'undefined') {
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    
    return { isDarkMode: newDarkMode };
  }),
}));