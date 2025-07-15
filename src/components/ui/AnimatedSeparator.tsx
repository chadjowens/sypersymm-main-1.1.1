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
          
          @keyframes gradient-shimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
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
              #0077ff 25%,
              #ff69b4 50%,
              #0077ff 75%,
              transparent 100%
            )`,
            backgroundSize: '200% 200%',
            left: '-25%',
            animation: 'shimmer 8s infinite linear, gradient-shimmer 8s ease infinite',
          }}
        />
      </div>
    </>
  );
};

export default AnimatedSeparator;