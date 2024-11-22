import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    // If we're on a service page, keep 'services' active
    if (location.pathname.startsWith('/services/')) {
      setActiveSection('services');
      return;
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        
        // Consider a section "active" if it's close to the viewport center
        // or if it takes up a significant portion of the viewport
        if (
          distance < minDistance && 
          (
            (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) ||
            (rect.top <= 0 && rect.bottom >= window.innerHeight * 0.5)
          )
        ) {
          minDistance = distance;
          currentSection = section.id;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, activeSection]);

  return activeSection;
};