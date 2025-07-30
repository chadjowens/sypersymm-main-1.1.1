import React from 'react';
import { useThemeStore } from '../../../store/themeStore';
import { IconCard } from '../ui/IconCard';

/**
 * AdvisorOverviewSection component - "Your Participation Benefits" section
 * 
 * This component renders the overview section featuring the main benefits of joining
 * the advisor community with:
 * - Section heading with gradient styling
 * - Introductory description
 * - Two benefit cards in a responsive grid layout
 * 
 * Features:
 * - Uses shared IconCard components for consistency
 * - Theme-aware styling for dark/light mode
 * - Responsive grid layout for mobile and desktop
 * - Structured benefit data with clear value propositions
 * 
 * @returns {JSX.Element} The rendered overview section
 */
export const AdvisorOverviewSection: React.FC = () => {
  const { isDarkMode } = useThemeStore();

  // Benefit cards data
  const benefitCards = [
    {
      icon: 'bar_chart',
      title: 'Transform conversations into a complete content package for marketing',
      listItems: [
        'Social media posts, graphics, and newsletter content ready for distribution',
        'Blog post outlines and key talking points for thought leadership',
        'Client conversation starters and prospect education materials'
      ]
    },
    {
      icon: 'hive',
      title: 'Industry Connections & Strategic Intelligence',
      description: 'Build relationships that drive your practice forward:',
      listItems: [
        'Directory presence highlighting your innovative approach',
        'Geographic referral network with technology-minded peers',
        'Collaborative discussions on practical implementation strategies'
      ]
    }
  ];

  return (
    <section className="py-20" id="value-props">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 hero-header">
          Your Participation Benefits
        </h2>

        {/* Introductory Description */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className={`text-xl md:text-2xl mb-6 font-light ${
            isDarkMode ? 'text-gray-200' : 'text-gray-600'
          }`}>
            The financial services technology landscape is changing faster than ever. While major institutions deploy specialized teams to leverage new capabilities, independent firms need streamlined access to industry intelligence and practical implementation strategies.
          </p>
        </div>
        
        {/* Benefit Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {benefitCards.map((card, index) => (
              <IconCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                listItems={card.listItems}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorOverviewSection;
