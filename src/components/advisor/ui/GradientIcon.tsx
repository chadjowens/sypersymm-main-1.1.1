import React from 'react';

/**
 * GradientIcon component for Material Symbol icons with gradient styling
 * 
 * This component provides a standardized way to render Material Symbol icons
 * with the hero-header gradient styling used throughout the advisor pages.
 * 
 * @param iconName - The Material Symbol icon name (e.g., 'groups', 'trending_up')
 * @param size - The size class for the icon (default: 'text-6xl')
 * @param className - Additional CSS classes to apply
 */
interface GradientIconProps {
  iconName: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const GradientIcon: React.FC<GradientIconProps> = ({
  iconName,
  size = 'text-6xl',
  className = '',
  style = {}
}) => {
  return (
    <span 
      className={`material-symbols-outlined hero-header ${size} ${className}`}
      style={{ fontSize: 'inherit', ...style }}
    >
      {iconName}
    </span>
  );
};

export default GradientIcon;
