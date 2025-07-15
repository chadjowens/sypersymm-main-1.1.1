import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';

/**
 * HomePage component for the SyperSymmetry website
 * 
 * Displays the main landing page with all primary sections:
 * - Hero section with introduction and call-to-action
 * - Services section showcasing all service offerings
 * - About section with company information
 * - Contact section with inquiry form
 * 
 * Also handles scroll behavior when navigating from other pages
 * 
 * @returns {JSX.Element} The rendered HomePage component
 */
const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we need to scroll to services section
    if (location.state && (location.state as any).scrollToServices) {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
