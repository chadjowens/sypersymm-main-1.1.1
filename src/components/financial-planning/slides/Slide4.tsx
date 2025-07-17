import React, { useState, useEffect } from 'react';
import FractalBackground from '../components/FractalBackground';
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
          className="mt-12 mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.98)',
            transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out',
          }}
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">
            About Supersymmetry
          </h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
        </div>
        
        {/* Content Area */}
        <div className="mb-20">
          <div className="grid grid-cols-1 gap-2">
            <div 
              className="p-5 shadow-sm border-l-4 border-purple-600" 
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.3s, transform 0.7s ease-in-out 0.3s'
              }}
            >
              <div className="text-xl font-semibold text-purple-600 mb-2">Who We Are</div>
              <p className="text-gray-700">An AI transformation partner leveraging Agentic AI to position organizations at the forefront of the digital revolution. We specialize in creating intelligent, autonomous systems that act as powerful force multipliers for your business.</p>
            </div>
            
            <div 
              className="p-5 shadow-sm border-l-4 border-purple-600" 
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.5s, transform 0.7s ease-in-out 0.5s'
              }}
            >
              <div className="text-xl font-semibold text-purple-600 mb-2">What We Do</div>
              <p className="text-gray-700">We build, deploy, and accelerate your digital operations with intelligent agent teams that work across your ecosystem. Our solutions optimize lead generation, enhance sales efficiency, streamline customer servicing, and drive data-driven decisions.</p>
            </div>
            
            <div 
              className="p-5 shadow-sm border-l-4 border-purple-600" 
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.7s, transform 0.7s ease-in-out 0.7s'
              }}
            >
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
        <div className="slide-footer-logo relative inline-block">
          SUPER{'{SYMMETRY}'}
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
