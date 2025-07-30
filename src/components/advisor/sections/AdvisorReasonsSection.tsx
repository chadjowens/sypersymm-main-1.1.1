import React from 'react';
import { useThemeStore } from '../../../store/themeStore';
import { ReasonCard } from '../ui/ReasonCard';

/**
 * AdvisorReasonsSection component - "Why Forward-Thinking Advisors Participate" section
 * 
 * This component renders the reasons section featuring six key reasons why advisors
 * should join the community with:
 * - Section heading with gradient styling
 * - Six reason cards in a responsive grid layout
 * - Themed background section styling
 * 
 * Features:
 * - Uses shared ReasonCard components for consistency
 * - Theme-aware background and styling
 * - Responsive grid layout (2 columns on medium, 3 on large screens)
 * - Structured reason data with clear value propositions
 * 
 * @returns {JSX.Element} The rendered reasons section
 */
export const AdvisorReasonsSection: React.FC = () => {
  const { isDarkMode } = useThemeStore();

  // Reasons data array
  const reasons = [
    {
      icon: 'search_insights',
      title: 'Stay Ahead Without the Research Overhead',
      description: 'Technology developments move faster than most advisors can track. We handle the research and analysis, delivering curated insights on what\'s coming and how it impacts your practice.'
    },
    {
      icon: 'crown',
      title: 'Content That Positions You as an Industry Leader',
      description: 'Every episode creates shareable content for financial advisor marketing. Your clients see you as forward-thinking, understanding both current practices and future trends.'
    },
    {
      icon: 'handshake',
      title: 'Connect with Like-Minded Professionals',
      description: 'Join advisors exploring technology\'s role in financial planning. Share experiences, learn from implementations, and build relationships with innovation-focused peers.'
    },
    {
      icon: 'bolt',
      title: 'Actionable Intelligence, Not Just Industry News',
      description: 'Access real-world guidance on scaling your practice and streamlining operations. Our insights focus on practical implementation, not abstract concepts.'
    },
    {
      icon: 'chart_data',
      title: 'Comprehensive Analysis Across All Trends',
      description: 'Ongoing analysis covers technology trends, regulatory implications, and competitive developments. Quarterly reports synthesize insights into strategic intelligence for practice planning.'
    },
    {
      icon: 'rocket_launch',
      title: 'Early Access to Industry Developments',
      description: 'Get early access to industry developments, expert interviews, and implementation case studies. Stay ahead while competitors are still learning basic automation.'
    }
  ];

  return (
    <section className={`py-20 ${
      isDarkMode ? 'bg-gray-900/30' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 hero-header">
          Why Forward-Thinking Advisors Participate
        </h2>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisorReasonsSection;
