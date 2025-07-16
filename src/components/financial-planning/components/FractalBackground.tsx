import React from 'react';
import '../styles/SlideStyles.css';

/**
 * FractalBackground - Reusable animated fractal background component
 * 
 * Provides a consistent animated gradient fractal pattern background
 * that can be used across all slides for visual consistency
 * 
 * @returns {JSX.Element} The rendered FractalBackground component
 */
const FractalBackground: React.FC = () => {
  return (
    <svg className="slide-fractal-background" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="animated-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0077ff">
            <animate attributeName="stop-color" values="#0077ff; #8A2BE2; #ff69b4; #8A2BE2; #0077ff" dur="24s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#ff69b4">
            <animate attributeName="stop-color" values="#ff69b4; #8A2BE2; #0077ff; #8A2BE2; #ff69b4" dur="24s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#0077ff">
            <animate attributeName="stop-color" values="#0077ff; #8A2BE2; #ff69b4; #8A2BE2; #0077ff" dur="24s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <pattern id="fractal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path className="slide-fractal-path slide-fractal-path-primary" d="M0 50 L25 25 L50 50 L75 25 L100 50 L75 75 L50 50 L25 75 Z"></path>
        <path className="slide-fractal-path slide-fractal-path-secondary" d="M0 0 L50 50 L0 100 M100 0 L50 50 L100 100"></path>
        <path className="slide-fractal-path slide-fractal-path-tertiary" d="M25 0 L25 100 M75 0 L75 100 M0 25 L100 25 M0 75 L100 75"></path>
      </pattern>
      <rect width="100%" height="100%" fill="url(#fractal-pattern)"></rect>
    </svg>
  );
};

export default FractalBackground;
