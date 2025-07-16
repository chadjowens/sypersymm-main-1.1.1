import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import { PopupModal } from 'react-calendly';
import { Link } from 'react-router-dom';

/**
 * SimpleNavbar component for the SyperSymmetry website
 * 
 * A simplified navigation bar for special pages like the financial planning page.
 * Includes only the logo, theme toggle, and consultation button.
 * 
 * @returns {JSX.Element} The rendered SimpleNavbar component
 */
export const SimpleNavbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isButtonAnimating, setIsButtonAnimating] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const startAnimation = () => {
      setIsButtonAnimating(true);
      
      // Clear animation after 3 seconds
      timeoutId = setTimeout(() => {
        setIsButtonAnimating(false);
      }, 3000);
    };

    // Initial animation
    startAnimation();
    
    // Set up interval for future animations (8s = 3s animation + 5s pause)
    const intervalId = setInterval(startAnimation, 8000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <nav 
        className="fixed w-full z-50 shadow-lg backdrop-blur-sm"
        style={{
          backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span 
                className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  textShadow: '2px 2px 0 #ff69b4, 4px 4px 0 rgba(255, 105, 180, 0.7), 6px 6px 0 rgba(255, 105, 180, 0.4)',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}
              >
                super/symmetry
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${
                  isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsCalendlyOpen(true)}
                className={`
                  consultation-button
                  px-4 
                  py-2 
                  rounded-lg 
                  text-sm 
                  font-normal
                  transition-all
                  duration-300
                  hover:shadow-lg
                  ${isButtonAnimating ? 'consultation-button-animated' : ''}
                  ${isDarkMode ? 'text-white bg-gray-800 hover:bg-gray-700' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'}
                `}
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Return to main site link */}
      <div className="pt-16 pb-2 text-center">
        <Link 
          to="/" 
          className={`inline-block mt-4 text-sm font-medium ${
            isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
          }`}
        >
          ← Return to Supersymm.io
        </Link>
      </div>

      {/* Calendly Modal */}
      {isCalendlyOpen && (
        <PopupModal
          url="https://calendly.com/supersymmetry/30min"
          onModalClose={() => setIsCalendlyOpen(false)}
          rootElement={document.getElementById('root')!}
          open={isCalendlyOpen}
        />
      )}
    </>
  );
};

export default SimpleNavbar;
