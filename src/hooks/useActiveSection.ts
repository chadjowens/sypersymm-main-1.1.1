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

    const observers = new Map();
    const sections = document.querySelectorAll('section[id]');

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.5,
      rootMargin: '-50% 0px -50% 0px',
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
      observers.set(section, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [location.pathname]);

  return activeSection;
};