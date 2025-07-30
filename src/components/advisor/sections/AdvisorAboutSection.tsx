import React from 'react';
import { useThemeStore } from '../../../store/themeStore';

/**
 * AdvisorAboutSection component - "Meet Your Community Host" section
 * 
 * This component renders the about section featuring the community host with:
 * - Section heading with gradient styling
 * - Host profile card with avatar placeholder
 * - Detailed biography and background information
 * - Theme-aware styling and hover effects
 * 
 * Features:
 * - Responsive grid layout for mobile and desktop
 * - Glassmorphism design with backdrop blur
 * - Interactive hover effects
 * - Professional profile presentation
 * 
 * @returns {JSX.Element} The rendered about section
 */
export const AdvisorAboutSection: React.FC = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 hero-header">
          Meet Your Community Host
        </h2>

        {/* Host Profile Card */}
        <div 
          style={{
            backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)'
          }}
          className={`
            rounded-md 
            backdrop-blur-sm 
            transition-all
            duration-300
            hover:shadow-lg
            border
            hover:!bg-opacity-70
            overflow-hidden
            ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
          `}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)';
          }}
        >
          <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
            {/* Avatar Section */}
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className={`w-48 h-48 rounded-full flex items-center justify-center text-6xl ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30' 
                  : 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200'
              }`}>
                👤
              </div>
            </div>

            {/* Content Section */}
            <div className="md:col-span-2 space-y-6">
              {/* Name and Title */}
              <div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  [Your Name]
                </h3>
                <p className={`text-lg font-medium mb-6 ${
                  isDarkMode ? 'text-blue-300' : 'text-blue-600'
                }`}>
                  Host & Founder of the Agent AI Community
                </p>
              </div>
              
              {/* Biography */}
              <div className="space-y-4">
                <p className={`text-base leading-relaxed font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  [Your Name] is the host and founder of the Agent AI community for financial planning professionals, 
                  bringing together independent advisors who are shaping the future of the industry through thoughtful 
                  technology adoption and implementation.
                </p>
                
                <p className={`text-base leading-relaxed font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Through extensive work with financial services organizations including Discover, Citi, and Capital One, 
                  [Your Name] has gained deep insights into both the sophisticated AI capabilities that large institutions 
                  deploy and the unique challenges that independent practices face in competing effectively while maintaining 
                  personal client relationships.
                </p>
                
                <p className={`text-base leading-relaxed font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  [Your Name] provides the analysis, insights, and strategic intelligence that help independent advisors 
                  understand and prepare for the industry's technological evolution. Through comprehensive research and 
                  ongoing analysis of Agent AI developments, the community receives practical guidance that translates 
                  cutting-edge technology into actionable strategies for small-to-mid-size firms.
                </p>
                
                <p className={`text-base leading-relaxed font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  The Adaptive Advisor community represents a vision where independent advisors leverage Agent AI capabilities 
                  to compete effectively with large institutions while maintaining the personal relationships and specialized 
                  service that set them apart.
                </p>
                
                <p className={`text-base leading-relaxed font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Through work at Supersymmetry, [Your Name] has gained deep insights into Agent AI implementation challenges 
                  and opportunities, which inform the strategic analysis and practical guidance provided to the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorAboutSection;
