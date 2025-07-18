import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './layouts/core/Navbar';
import { Background } from './layouts/core/Background';
import { useThemeStore } from './store/themeStore';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { ThreeJsPreloader } from './components/common/ThreeJsPreloader';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import PresentationDeckPage from './pages/PresentationDeckPage';
import FinancialPlanningPage from './pages/FinancialPlanningPage';

/**
 * Main App component that sets up routing and global layout
 * 
 * Provides the application shell with:
 * - Theme context (light/dark mode)
 * - Navigation bar
 * - Background effects
 * - Error boundary for graceful error handling
 * - Routing configuration for all pages
 * 
 * @returns {JSX.Element} The rendered App component
 */

/**
 * AppLayout component that conditionally renders the Navbar
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} The rendered AppLayout component
 */
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useThemeStore();
  const location = useLocation();
  
  // Don't render the main Navbar on the financial-planning-2 page
  // since it has its own SimpleNavbar
  const showMainNavbar = location.pathname !== '/sample-proposal';
  
  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'dark' : 'light'}`}>
      <ErrorBoundary>
        <Background />
      </ErrorBoundary>
      <div className="relative">
        {showMainNavbar && <Navbar />}
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      {/* Preload Three.js as early as possible */}
      <ThreeJsPreloader />
      
      <Routes>
        <Route path="/" element={<AppLayout><HomePage /></AppLayout>} />
        <Route path="/services/:serviceSlug" element={<AppLayout><ServicePage /></AppLayout>} />
        <Route path="/financial-planning" element={<AppLayout><PresentationDeckPage /></AppLayout>} />
        <Route path="/sample-proposal" element={<AppLayout><FinancialPlanningPage /></AppLayout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;