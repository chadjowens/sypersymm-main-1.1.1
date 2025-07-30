import React from 'react';
import { useThemeStore } from '../store/themeStore';
import { SimpleNavbar } from '../layouts/core/SimpleNavbar';
import { Background } from '../layouts/core/Background';
import { AdvisorHeroSection } from '../components/advisor/sections/AdvisorHeroSection';
import { AdvisorOverviewSection } from '../components/advisor/sections/AdvisorOverviewSection';
import { AdvisorReasonsSection } from '../components/advisor/sections/AdvisorReasonsSection';
import { AdvisorAboutSection } from '../components/advisor/sections/AdvisorAboutSection';
import { AdvisorSignupForm } from '../components/advisor/sections/AdvisorSignupForm';

/**
 * AdvisorAccessPage component - The Adaptive Advisor Community
 * 
 * An orphan page for the Agent AI community for financial planning professionals.
 * Not linked from main navigation, accessible only via direct URL.
 * 
 * This component serves as the main orchestrator, importing and rendering all
 * section components in the correct order. Each section is now a separate,
 * focused component that handles its own state and styling.
 * 
 * Refactored from a monolithic 980+ line component into a clean orchestrator
 * that uses modular section components, improving maintainability and compliance
 * with the Windsurf 500-line rule.
 * 
 * @returns {JSX.Element} The rendered AdvisorAccessPage component
 */
const AdvisorAccessPage: React.FC = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'dark' : 'light'}`}>
      <Background />
      <div className="relative">
        <SimpleNavbar />
        <AdvisorHeroSection />
        <AdvisorOverviewSection />
        <AdvisorReasonsSection />
        <AdvisorAboutSection />
        <AdvisorSignupForm />
      </div>
    </div>
  );
};

export default AdvisorAccessPage;
