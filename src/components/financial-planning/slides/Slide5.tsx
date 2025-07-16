import React from 'react';
import '../styles/SlideStyles.css';

/**
 * Slide5 component - Our Engagement Approach
 * 
 * Fifth slide in the financial planning presentation
 * Displays the five-pillar approach with a stair-step visualization
 * 
 * @returns {JSX.Element} The rendered Slide5 component
 */
const Slide5: React.FC = () => {
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
          <linearGradient id="animated-gradient-slide5" x1="0%" y1="0%" x2="100%" y2="100%">
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
        <pattern id="fractal-pattern-slide5" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 50 L25 25 L50 50 L75 25 L100 50 L75 75 L50 50 L25 75 Z" fill="none" stroke="url(#animated-gradient-slide5)" strokeWidth="0.8" opacity="0.7"></path>
          <path d="M0 0 L50 50 L0 100 M100 0 L50 50 L100 100" fill="none" stroke="url(#animated-gradient-slide5)" strokeWidth="0.6" opacity="0.6"></path>
          <path d="M25 0 L25 100 M75 0 L75 100 M0 25 L100 25 M0 75 L100 75" fill="none" stroke="url(#animated-gradient-slide5)" strokeWidth="0.4" opacity="0.5"></path>
        </pattern>
        <rect width="100%" height="100%" fill="url(#fractal-pattern-slide5)"></rect>
      </svg>
      
      <div className="relative z-10 px-16 h-full flex flex-col" style={{ backgroundColor: 'transparent' }}>
        {/* Title Section with good spacing from top */}
        <div className="mt-12 mb-6 text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">
            Our Engagement Approach
          </h1>
          <div className="w-32 h-1 bg-purple-600 mt-4 mx-auto"></div>
        </div>
        
        {/* Content Area */}
        <div className="flex flex-col items-center justify-center mb-8">
          <p className="text-xl text-gray-700 text-center mb-8 max-w-3xl">
            Supersymmetry offers a structured approach through five core pillars that work together as a comprehensive transformation system:
          </p>
          
          {/* Stair Step Visualization */}
          <div className="relative w-full max-w-4xl mx-auto" style={{ height: '280px' }}>
            {/* Step 1: Foundation */}
            <div 
              className="absolute flex items-start justify-center font-bold text-gray-800 p-4 shadow-md border-2 border-white border-opacity-40" 
              style={{ 
                left: '60px', 
                top: '190px', 
                backgroundColor: 'rgba(255, 87, 51, 0.7)', 
                zIndex: 5,
                width: '230px',
                height: '80px'
              }}
            >
              <div className="flex flex-row items-center justify-center w-full">
                <div className="text-xl font-extrabold mr-2">01</div>
                <div className="mx-2 font-light text-black text-opacity-50">|</div>
                <div className="text-lg tracking-wide" style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.2)' }}>Foundation</div>
              </div>
            </div>
            
            {/* Step 2: Sales */}
            <div 
              className="absolute flex items-start justify-center font-bold text-gray-800 p-4 shadow-md border-2 border-white border-opacity-40" 
              style={{ 
                left: '180px', 
                top: '145px', 
                backgroundColor: 'rgba(255, 152, 0, 0.7)', 
                zIndex: 4,
                width: '230px',
                height: '80px'
              }}
            >
              <div className="flex flex-row items-center justify-center w-full">
                <div className="text-xl font-extrabold mr-2">02</div>
                <div className="mx-2 font-light text-black text-opacity-50">|</div>
                <div className="text-lg tracking-wide" style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.2)' }}>Sales</div>
              </div>
            </div>
            
            {/* Step 3: Servicing */}
            <div 
              className="absolute flex items-start justify-center font-bold text-gray-800 p-4 shadow-md border-2 border-white border-opacity-40" 
              style={{ 
                left: '300px', 
                top: '100px', 
                backgroundColor: 'rgba(139, 195, 74, 0.7)', 
                zIndex: 3,
                width: '230px',
                height: '80px'
              }}
            >
              <div className="flex flex-row items-center justify-center w-full">
                <div className="text-xl font-extrabold mr-2">03</div>
                <div className="mx-2 font-light text-black text-opacity-50">|</div>
                <div className="text-lg tracking-wide" style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.2)' }}>Servicing</div>
              </div>
            </div>
            
            {/* Step 4: Optimization */}
            <div 
              className="absolute flex items-start justify-center font-bold text-gray-800 p-4 shadow-md border-2 border-white border-opacity-40" 
              style={{ 
                left: '420px', 
                top: '55px', 
                backgroundColor: 'rgba(33, 150, 243, 0.7)', 
                zIndex: 2,
                width: '260px',
                height: '80px'
              }}
            >
              <div className="flex flex-row items-center justify-center w-full">
                <div className="text-xl font-extrabold mr-2">04</div>
                <div className="mx-2 font-light text-black text-opacity-50">|</div>
                <div className="text-lg tracking-wide" style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.2)' }}>Optimization</div>
              </div>
            </div>
            
            {/* Step 5: Innovation */}
            <div 
              className="absolute flex items-start justify-center font-bold text-gray-800 p-4 shadow-md border-2 border-white border-opacity-40" 
              style={{ 
                left: '600px', 
                top: '10px', 
                backgroundColor: 'rgba(156, 39, 176, 0.7)', 
                zIndex: 1,
                width: '230px',
                height: '80px'
              }}
            >
              <div className="flex flex-row items-center justify-center w-full">
                <div className="text-xl font-extrabold mr-2">05</div>
                <div className="mx-2 font-light text-black text-opacity-50">|</div>
                <div className="text-lg tracking-wide" style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.2)' }}>Innovation</div>
              </div>
            </div>
            
            {/* Education Bar */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-11/12 h-15 flex items-center justify-center rounded-lg shadow-md font-bold text-purple-900 border-2 border-purple-600 border-opacity-30 text-lg"
              style={{ 
                backgroundColor: 'rgba(240, 230, 255, 0.8)',
                boxShadow: '0 -4px 12px rgba(138, 43, 226, 0.2)',
                height: '60px',
                bottom: '-20px'
              }}
            >
              <div className="flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
                <span>Education Across All Areas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with logo and page numbering */}
      <div 
        className="absolute bottom-0 w-full py-5 px-10 flex justify-between items-center border-t border-gray-200 z-20" 
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      >
        <div className="slide-footer-logo relative inline-block">
          SUPER{'{SYMMETRY}'}
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-4">Confidential</span>
          <span className="text-sm text-gray-500">5</span>
        </div>
      </div>
    </div>
  );
};

export default Slide5;
