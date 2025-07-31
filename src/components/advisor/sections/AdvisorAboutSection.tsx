import React from 'react';
import { useThemeStore } from '../../../store/themeStore';
import profileImage from '../../../assets/images/chad-profile.jpg';

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
          <div className="grid md:grid-cols-3 gap-4 p-8 md:p-12 md:items-center">
            {/* Avatar Section */}
            <div className="md:col-span-1 flex justify-center items-center">
              <div className={`w-48 h-48 rounded-full overflow-hidden border-2 ${
                isDarkMode 
                  ? 'border-blue-400/30' 
                  : 'border-blue-200'
              }`}>
                <img 
                  src={profileImage} 
                  alt="Chad Owens" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="md:col-span-2 space-y-6">
              {/* Name and Title */}
              <div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Chad Owens
                </h3>
                <p className={`text-lg font-medium mb-6 ${
                  isDarkMode ? 'text-blue-300' : 'text-blue-600'
                }`}>
                  Founder of Future-Forward Planning & Super&#123;Symmetry&#125;
                </p>
              </div>
              
              {/* Biography */}
              <div className="space-y-4">
                <p className={`text-base leading-relaxed font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Chad facilitates conversations with financial planning professionals who are using emerging technologies to evolve their practices. Drawing from 15+ years of experience driving digital innovation across multiple industries, Chad finds fintech and wealth management especially compelling for their rapid transformation potential. 
                </p>

                <p className={`text-base leading-relaxed font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Chad and his carefully selected guests deliver strategic insights that help independent advisors harness new technologies to stay ahead of industry change while preserving their distinctive client relationships. The platform provides practical guidance that turns technological developments into actionable growth strategies for independent firms.
                </p>
                
                {/* <p className={`text-base leading-relaxed font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Chad, along with his carefully curated guests, provides strategic insights that help independent advisors leverage emerging technologies to evolve at the pace of industry change while maintaining the personal relationships that set them apart. The community delivers practical guidance that translates cutting-edge technology developments into actionable strategies for small-to-mid-size firms.
                </p> */}
                
                {/* <p className={`text-base leading-relaxed font-light ${
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
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorAboutSection;
