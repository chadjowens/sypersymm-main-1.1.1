import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { NavItem } from '../types';
import { PopupModal } from 'react-calendly';
import { useActiveSection } from '../hooks/useActiveSection';
import { useLocation } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const location = useLocation();

  const isServicePage = location.pathname.startsWith('/services/');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
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

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const isActive = isServicePage 
                  ? item.href === '#services'
                  : activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={isServicePage && item.href !== '#services' ? `/${item.href}` : item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? isDarkMode
                          ? 'bg-gray-700 text-white'
                          : 'bg-gray-100 text-blue-600'
                        : isDarkMode
                        ? 'text-gray-200 hover:text-white hover:bg-gray-700'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
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
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className={`px-2 pt-2 pb-3 space-y-1 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          {navItems.map((item) => {
            const isActive = isServicePage 
              ? item.href === '#services'
              : activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={isServicePage && item.href !== '#services' ? `/${item.href}` : item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? isDarkMode
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-100 text-blue-600'
                    : isDarkMode
                    ? 'text-gray-200 hover:text-white hover:bg-gray-700'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <button
            onClick={() => {
              setIsCalendlyOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
          >
            Schedule Consultation
          </button>
        </div>
      </div>

      {isCalendlyOpen && (
        <PopupModal
          url="https://calendly.com/chad-owens-supersymm/30min"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.getElementById('root') || document.body}
        />
      )}
    </nav>
  );
};