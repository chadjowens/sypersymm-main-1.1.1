import React from 'react';
import { useThemeStore } from '../../../store/themeStore';

/**
 * AdvisorHeroSection component - Hero section for the Advisor Access Page
 * 
 * This component renders the main hero section with:
 * - Primary heading and call-to-action
 * - Value proposition description
 * - Benefits highlight box
 * - Action buttons for joining and signing in
 * 
 * Features:
 * - Theme-aware styling for dark/light mode
 * - Responsive design for mobile and desktop
 * - Gradient text styling with hero-header class
 * - Backdrop blur effects and glassmorphism design
 * 
 * @returns {JSX.Element} The rendered hero section
 */
export const AdvisorHeroSection: React.FC = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl text-center">
        {/* Main Heading */}
        <h1 className={`text-4xl md:text-6xl font-bold mb-6 hero-header ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Join the Conversation Shaping the Future of Financial Planning Firms
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl mb-8 font-light max-w-4xl mx-auto ${
          isDarkMode ? 'text-gray-200' : 'text-gray-600'
        }`}>
          Connect with progressive financial planning and wealth management professionals who are successfully integrating new technologies to transform their client experience, operational capabilities, and growth trajectory.
        </p>
        
        {/* Benefits Highlight Box */}
        <div 
          style={{
            backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)'
          }}
          className={`p-8 rounded-2xl mb-8 max-w-4xl mx-auto backdrop-blur-sm border ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}
        >
          <h3 className={`text-2xl font-semibold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Every conversation provides:
          </h3>
          <p className={`text-lg leading-relaxed ${
            isDarkMode ? 'text-gray-200' : 'text-gray-600'
          }`}>
            Marketing-ready content showcasing innovative approaches • Intelligence insights gathered from peer discussions • Strategic analysis combining perspectives from leading advisors
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="#signup" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Join the Conversation
          </a>
          <a 
            href="#value-props" 
            className={`${
              isDarkMode
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            } px-8 py-3 rounded-lg text-lg font-medium transition-colors`}
          >
            Sign In for Content & Insights
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdvisorHeroSection;
