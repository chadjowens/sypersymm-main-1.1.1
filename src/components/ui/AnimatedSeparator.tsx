import React from 'react';
import { useThemeStore } from '../../store/themeStore';

interface AnimatedSeparatorProps {
  className?: string;
}

const AnimatedSeparator: React.FC<AnimatedSeparatorProps> = ({ className = '' }) => {
  const { isDarkMode } = useThemeStore();

  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(0%); }
            100% { transform: translateX(250%); }
          }
        `}
      </style>
      <div
        className={`w-full h-[1px] relative overflow-hidden ${className}`}
        style={{
          background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          className="absolute h-full w-[50%]"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%,
              rgba(255, 192, 203, 0.8) 50%,
              transparent 100%
            )`,
            left: '-25%',
            animation: 'shimmer 3s infinite linear',
          }}
        />
      </div>
    </>
  );
};

export default AnimatedSeparator;