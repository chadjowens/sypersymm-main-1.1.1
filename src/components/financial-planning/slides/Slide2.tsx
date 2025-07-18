import React, { useState, useEffect } from 'react';
import FractalBackground from '../components/FractalBackground';
import '../styles/SlideStyles.css';

/**
 * Slide2 component - The AI Transformation Imperative
 * 
 * Second slide in the financial planning presentation
 * Highlights key statistics about AI adoption and business impact
 * 
 * @returns {JSX.Element} The rendered Slide2 component
 */
const Slide2: React.FC = () => {
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
          className="mt-16 mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.98)',
            transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out',
          }}
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">
            The AI Transformation Imperative
          </h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-4 text-gray-800">The business landscape is undergoing a seismic shift powered by AI. Key statistics reveal the urgency of adoption:</p>
        </div>
        
        {/* Content Area */}
        <div className="mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div 
              className="p-4 shadow-sm border-l-4 border-purple-600" 
              style={{ 
                backgroundColor: '#ffffff',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.3s, transform 0.7s ease-in-out 0.3s'
              }}
            >
              <span className="text-xl font-bold text-purple-600">$4.4 trillion</span>
              <p className="text-gray-700">Long-term AI productivity potential (McKinsey)</p>
            </div>
            
            <div 
              className="p-4 shadow-sm border-l-4 border-purple-600" 
              style={{ 
                backgroundColor: '#ffffff',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.5s, transform 0.7s ease-in-out 0.5s'
              }}
            >
              <span className="text-xl font-bold text-purple-600">4× growth</span>
              <p className="text-gray-700">Productivity nearly quadrupled in AI-exposed industries since 2022</p>
            </div>
            
            <div 
              className="p-4 shadow-sm border-l-4 border-purple-600" 
              style={{ 
                backgroundColor: '#ffffff',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.7s, transform 0.7s ease-in-out 0.7s'
              }}
            >
              <span className="text-xl font-bold text-purple-600">56%</span>
              <p className="text-gray-700">Wage premium for jobs requiring AI skills</p>
            </div>
            
            <div 
              className="p-4 shadow-sm border-l-4 border-purple-600" 
              style={{ 
                backgroundColor: '#ffffff',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.9s, transform 0.7s ease-in-out 0.9s'
              }}
            >
              <span className="text-xl font-bold text-purple-600">80%</span>
              <p className="text-gray-700">Productivity improvement reported by workers using AI tools</p>
            </div>
          </div>
          
          <div 
            className="mt-6 text-lg"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.98)',
              transition: 'opacity 0.7s ease-in-out 1.1s, transform 0.7s ease-in-out 1.1s'
            }}
          >
            <p className="font-semibold text-gray-800">3 out of 5 business owners predict AI will drive sales growth</p>
            <p className="mt-3 text-gray-800 font-semibold italic">The message is clear: AI adoption is no longer optional—it's a competitive imperative.</p>
          </div>
        </div>
      </div>
      
      {/* Footer with logo and page numbering */}
      <div 
        className="absolute bottom-0 w-full py-3 px-10 flex justify-between items-center border-t border-gray-200 z-20" 
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="slide-footer-logo relative inline-block">
          SUPER{'{SYMMETRY}'}
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 mr-3">Confidential</span>
          <span className="text-xs text-gray-500">2</span>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
