import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { AIDevLayout } from './components/layouts/AIDevLayout';
import { MVPLayout } from './components/layouts/MVPLayout';
import { FullStackLayout } from './components/layouts/FullStackLayout';
import { UXUILayout } from './components/layouts/UXUILayout';
import { DataVizLayout } from './components/layouts/DataVizLayout';
import { AICreativeLayout } from './components/layouts/AICreativeLayout';
import { useThemeStore } from './store/themeStore';
import { ErrorBoundary } from './components/ErrorBoundary';

const MainLayout = () => {
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
      <Services />
      <About />
      <Contact />
    </main>
  );
};

function App() {
  const { isDarkMode } = useThemeStore();

  return (
    <Router>
      <div className={`relative min-h-screen ${isDarkMode ? 'dark' : 'light'}`}>
        <ErrorBoundary>
          <Background />
        </ErrorBoundary>
        <div className="relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/services/ai-development" element={<AIDevLayout />} />
            <Route path="/services/mvp-development" element={<MVPLayout />} />
            <Route path="/services/custom-development" element={<FullStackLayout />} />
            <Route path="/services/ux-ui-design" element={<UXUILayout />} />
            <Route path="/services/data-visualization" element={<DataVizLayout />} />
            <Route path="/services/ai-creative" element={<AICreativeLayout />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;