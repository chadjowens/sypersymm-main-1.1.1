import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './layouts/core/Navbar';
import { Background } from './layouts/core/Background';
import { useThemeStore } from './store/themeStore';
import { ErrorBoundary } from './components/common/ErrorBoundary';
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
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:serviceSlug" element={<ServicePage />} />
            <Route path="/financial-planning" element={<PresentationDeckPage />} />
            <Route path="/financial-planning-2" element={<FinancialPlanningPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;