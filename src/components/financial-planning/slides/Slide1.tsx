import React from 'react';

/**
 * Slide1 component - Digital Transformation Partnership Proposal
 * 
 * First slide in the financial planning presentation
 * Introduces the digital transformation partnership concept
 * 
 * @returns {JSX.Element} The rendered Slide1 component
 */
const Slide1: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      {/* Fractal Pattern Background */}
      <svg className="absolute w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <linearGradient id="animated-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0077ff">
              <animate attributeName="stop-color" values="#0077ff; #ff69b4; #0077ff" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#ff69b4">
              <animate attributeName="stop-color" values="#ff69b4; #0077ff; #ff69b4" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#0077ff">
              <animate attributeName="stop-color" values="#0077ff; #ff69b4; #0077ff" dur="8s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <pattern id="fractal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 50 L25 25 L50 50 L75 25 L100 50 L75 75 L50 50 L25 75 Z" fill="none" stroke="url(#animated-gradient)" strokeWidth="0.8" opacity="0.7"></path>
          <path d="M0 0 L50 50 L0 100 M100 0 L50 50 L100 100" fill="none" stroke="url(#animated-gradient)" strokeWidth="0.6" opacity="0.6"></path>
          <path d="M25 0 L25 100 M75 0 L75 100 M0 25 L100 25 M0 75 L100 75" fill="none" stroke="url(#animated-gradient)" strokeWidth="0.4" opacity="0.5"></path>
        </pattern>
        <rect width="100%" height="100%" fill="url(#fractal-pattern)"></rect>
      </svg>
      
      <div className="relative z-10 h-full px-20 flex items-center justify-center">
        {/* Title Section with vertical centering */}
        <div className="flex-grow flex flex-col items-center justify-center text-center">
          <h1 className="font-bold tracking-tight leading-tight text-5xl mb-6" style={{ 
            background: 'linear-gradient(90deg, #000000, #8A2BE2)', 
            WebkitBackgroundClip: 'text', 
            color: 'transparent' 
          }}>
            Digital Transformation, Growth &amp; Agentic Automation Partnership
          </h1>
          <h2 className="font-medium text-gray-700 leading-normal text-2xl mb-10">
            Comprehensive 12-Month Digital Transformation Strategy
          </h2>
          <p className="text-lg text-gray-600 mt-12">Prepared by: Supersymmetry, LLC</p>
        </div>
      </div>
      
      {/* Footer with logo and page numbering */}
      <div className="absolute bottom-0 left-0 right-0 w-full py-5 px-10 flex justify-between items-center border-t border-gray-200 bg-white bg-opacity-80 z-20">
        <div className="font-extrabold text-xl uppercase tracking-wider" style={{ 
          background: 'linear-gradient(90deg, #000000, #8A2BE2)', 
          WebkitBackgroundClip: 'text', 
          color: 'transparent',
          position: 'relative',
          display: 'inline-block'
        }}>
          SUPER{'{SYMMETRY}'}
          <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-purple-600"></span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-4">Confidential</span>
          <span className="text-sm text-gray-500">1</span>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
