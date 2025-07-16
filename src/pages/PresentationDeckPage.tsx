import React from 'react';
import { useThemeStore } from '../store/themeStore';
import PresentationDeck from '../components/sections/PresentationDeck';
import { SimpleNavbar } from '../layouts/core/SimpleNavbar';
import { Background } from '../layouts/core/Background';

/**
 * PresentationDeckPage component
 * 
 * A standalone page for displaying the financial planning interactive presentation deck
 * This page is designed to be accessed directly via URL without navigation links
 * Uses a simplified navbar with only logo, theme toggle, and consultation button
 * 
 * @returns {JSX.Element} The rendered PresentationDeckPage component
 */
const PresentationDeckPage: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  
  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'light bg-gray-50'}`}>
      <Background />
      <div className="relative">
        <SimpleNavbar />
        <main className="pt-16"> {/* Add padding-top to prevent content from sitting behind navbar */}
          <PresentationDeck />
        </main>
      </div>
    </div>
  );
};

export default PresentationDeckPage;
