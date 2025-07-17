import React, { useState, useEffect } from 'react';
import FractalBackground from '../components/FractalBackground';
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
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visible after component mounts to trigger animations
    setIsVisible(true);
  }, []);
  
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
      <FractalBackground />
      
      <div className="relative z-10 px-16 h-full flex flex-col" style={{ backgroundColor: 'transparent' }}>
        {/* Title Section with good spacing from top */}
        <div 
          className="mt-12 mb-6 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.98)',
            transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out'
          }}
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">
            Our Engagement Approach
          </h1>
          <div className="w-32 h-1 bg-purple-600 mt-4 mx-auto"></div>
        </div>
        
        {/* Content Area */}
        <div className="flex flex-col items-center justify-center mb-8">
          <p 
            className="text-xl text-gray-700 text-center mb-8 max-w-3xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.98)',
              transition: 'opacity 0.7s ease-in-out 0.2s, transform 0.7s ease-in-out 0.2s'
            }}
          >
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
                height: '80px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.4s, transform 0.7s ease-in-out 0.4s'
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
                height: '80px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.6s, transform 0.7s ease-in-out 0.6s'
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
                height: '80px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.8s, transform 0.7s ease-in-out 0.8s'
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
                height: '80px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 1.0s, transform 0.7s ease-in-out 1.0s'
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
                height: '80px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 1.2s, transform 0.7s ease-in-out 1.2s'
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
              className="absolute left-1/2 w-11/12 h-15 flex items-center justify-center rounded-lg shadow-md text-purple-900 border-2 border-purple-600 border-opacity-30 text-lg"
              style={{ 
                backgroundColor: 'rgba(240, 230, 255, 0.8)',
                boxShadow: '0 -4px 12px rgba(138, 43, 226, 0.2)',
                height: '60px',
                bottom: '-20px',
                opacity: isVisible ? 1 : 0,
                transform: `translateX(-50%) ${isVisible ? 'scale(1)' : 'scale(0.98)'}`,
                transition: 'opacity 0.7s ease-in-out 1.4s, transform 0.7s ease-in-out 1.4s',
                transformOrigin: 'center center'
              }}
            >
              <div className="flex items-center justify-center">
                <span 
                  className="material-symbols-outlined mr-3"
                  style={{
                    background: 'linear-gradient(90deg, #000000, #8A2BE2)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    animation: 'gradient-animation 3s ease-in-out infinite',
                    fontSize: '24px'
                  }}
                >
                  school
                </span>
                <span>Education Across All Areas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with logo and page numbering */}
      <div 
        className="absolute bottom-0 w-full py-3 px-10 flex justify-between items-center border-t border-gray-200 z-20" 
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      >
        <div className="slide-footer-logo relative inline-block">
          SUPER{'{SYMMETRY}'}
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 mr-3">Confidential</span>
          <span className="text-xs text-gray-500">5</span>
        </div>
      </div>
    </div>
  );
};

export default Slide5;
