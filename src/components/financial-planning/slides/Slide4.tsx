import React from 'react';
import '../styles/SlideStyles.css';

/**
 * Slide4 component - About Supersymmetry
 * 
 * Fourth slide in the financial planning presentation
 * Provides information about Supersymmetry company
 * 
 * @returns {JSX.Element} The rendered Slide4 component
 */
const Slide4: React.FC = () => {
  return (
    <div 
      className="slide-container" 
      style={{ 
        backgroundColor: '#ffffff',
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: '0',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
    >
      {/* Fractal Pattern Background */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-25 z-0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <linearGradient id="animated-gradient-slide4" x1="0%" y1="0%" x2="100%" y2="100%">
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
        <pattern id="fractal-pattern-slide4" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 50 L25 25 L50 50 L75 25 L100 50 L75 75 L50 50 L25 75 Z" fill="none" stroke="url(#animated-gradient-slide4)" strokeWidth="0.8" opacity="0.7"></path>
          <path d="M0 0 L50 50 L0 100 M100 0 L50 50 L100 100" fill="none" stroke="url(#animated-gradient-slide4)" strokeWidth="0.6" opacity="0.6"></path>
          <path d="M25 0 L25 100 M75 0 L75 100 M0 25 L100 25 M0 75 L100 75" fill="none" stroke="url(#animated-gradient-slide4)" strokeWidth="0.4" opacity="0.5"></path>
        </pattern>
        <rect width="100%" height="100%" fill="url(#fractal-pattern-slide4)"></rect>
      </svg>
      
      <div className="relative z-10 px-16 h-full flex flex-col" style={{ backgroundColor: 'transparent' }}>
        {/* Title Section with good spacing from top */}
        <div className="mt-12 mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">
            About Supersymmetry
          </h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
        </div>
        
        {/* Content Area */}
        <div className="mb-20">
          <div className="grid grid-cols-1 gap-2">
            <div className="p-5 shadow-sm border-l-4 border-purple-600" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <div className="text-xl font-semibold text-purple-600 mb-2">Who We Are</div>
              <p className="text-gray-700">An AI transformation partner leveraging Agentic AI to position organizations at the forefront of the digital revolution. We specialize in creating intelligent, autonomous systems that act as powerful force multipliers for your business.</p>
            </div>
            
            <div className="p-5 shadow-sm border-l-4 border-purple-600" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <div className="text-xl font-semibold text-purple-600 mb-2">What We Do</div>
              <p className="text-gray-700">We build, deploy, and accelerate your digital operations with intelligent agent teams that work across your ecosystem. Our solutions optimize lead generation, enhance sales efficiency, streamline customer servicing, and drive data-driven decisions.</p>
            </div>
            
            <div className="p-5 shadow-sm border-l-4 border-purple-600" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <div className="text-xl font-semibold text-purple-600 mb-2">Our Philosophy</div>
              <p className="text-gray-700">True digital transformation extends beyond mere automation; it involves creating intelligent, autonomous agent teams that amplify human capabilities. This collaborative intelligence creates a force multiplier effect, enabling you to achieve significantly greater outcomes with existing resources.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with logo and page numbering */}
      <div 
        className="absolute bottom-0 w-full py-5 px-10 flex justify-between items-center border-t border-gray-200 z-20" 
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      >
        <div className="font-extrabold text-xl uppercase tracking-wider bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent relative inline-block">
          SUPER{'{SYMMETRY}'}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"></span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-4">Confidential</span>
          <span className="text-sm text-gray-500">4</span>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
