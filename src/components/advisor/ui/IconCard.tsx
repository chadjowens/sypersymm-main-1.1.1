import React from 'react';
import { useThemeStore } from '../../../store/themeStore';
import { GradientIcon } from './GradientIcon';

/**
 * IconCard component for displaying benefit cards with Material Symbol icons
 * 
 * This component provides a standardized card layout with:
 * - Material Symbol icon with gradient styling
 * - Title and description
 * - Optional list of features/benefits
 * - Theme-aware styling and hover effects
 * 
 * @param icon - The Material Symbol icon name
 * @param title - The card title
 * @param description - The card description (optional)
 * @param listItems - Array of feature/benefit items to display as a list
 * @param className - Additional CSS classes to apply
 */
interface IconCardProps {
  icon: string;
  title: string;
  description?: string;
  listItems?: string[];
  className?: string;
}

export const IconCard: React.FC<IconCardProps> = ({
  icon,
  title,
  description,
  listItems = [],
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
      <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>

      {/* Description (if provided) */}
      {description && (
        <p className={`text-base leading-relaxed font-light mb-4 ${
          isDarkMode ? 'text-gray-200' : 'text-gray-600'
        }`}>
          {description}
        </p>
      )}

      {/* List Items */}
      {listItems.length > 0 && (
        <ul className={`space-y-2 text-base leading-relaxed font-light flex-grow ${
          isDarkMode ? 'text-gray-200' : 'text-gray-600'
        }`}>
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className={`mr-2 mt-1 ${
                isDarkMode ? 'text-green-400' : 'text-green-500'
              }`}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IconCard;
