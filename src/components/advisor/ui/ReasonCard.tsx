import React from 'react';
import { useThemeStore } from '../../../store/themeStore';
import { GradientIcon } from './GradientIcon';

/**
 * ReasonCard component for displaying reason cards in the "Why Forward-Thinking Advisors Participate" section
 * 
 * This component provides a standardized card layout with:
 * - Material Symbol icon with gradient styling
 * - Title and description
 * - Theme-aware styling and hover effects
 * - Consistent spacing and typography
 * 
 * @param icon - The Material Symbol icon name
 * @param title - The card title
 * @param description - The card description
 * @param className - Additional CSS classes to apply
 */
interface ReasonCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export const ReasonCard: React.FC<ReasonCardProps> = ({
  icon,
  title,
  description,
  className = ''
}) => {
  const { isDarkMode } = useThemeStore();

  return (
    <div 
      style={{
        backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)',
        minHeight: '225px'
      }}
      className={`
        p-6 
        rounded-md 
        backdrop-blur-sm 
        transition-all
        duration-300
        hover:shadow-lg
        border
        hover:!bg-opacity-70
        h-full
        flex flex-col
        ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
        ${className}
      `}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)';
      }}
    >
      {/* Icon Container */}
      <div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <GradientIcon 
          iconName={icon}
          size=""
          className=""
          style={{ fontSize: '32px' }}
        />
      </div>

      {/* Title */}
      <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'} mb-0 font-light leading-snug flex-grow`}>
        {description}
      </p>
    </div>
  );
};

export default ReasonCard;
