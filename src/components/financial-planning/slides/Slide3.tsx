import React, { useState, useEffect } from 'react';
import FractalBackground from '../components/FractalBackground';
import '../styles/SlideStyles.css';

/**
 * Slide3 component - Implications for Business
 * 
 * Third slide in the financial planning presentation
 * Outlines the implications of AI transformation for the client's business
 * 
 * @returns {JSX.Element} The rendered Slide3 component
 */
const Slide3: React.FC<{ businessName?: string }> = ({ businessName = 'Your Business' }) => {
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
            Implications for {businessName}
          </h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-4 text-gray-800">What these AI transformation trends mean for your organization:</p>
        </div>
        
        {/* Content Area */}
        <div className="mb-12">
          <div className="grid grid-cols-1 gap-2">
            <div 
              className="p-5 shadow-sm border-l-4 border-purple-600" 
              style={{ 
                backgroundColor: '#ffffff',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.3s, transform 0.7s ease-in-out 0.3s'
              }}
            >
              <div className="text-xl font-semibold text-purple-600 mb-2">Competitive Pressure</div>
              <p className="text-gray-700">The rapid adoption of AI solutions is creating a widening gap between digital leaders and laggards. Organizations that delay transformation risk falling permanently behind as competitors leverage AI for efficiency and growth.</p>
            </div>
            
            <div 
              className="p-5 shadow-sm border-l-4 border-purple-600" 
              style={{ 
                backgroundColor: '#ffffff',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.5s, transform 0.7s ease-in-out 0.5s'
              }}
            >
              <div className="text-xl font-semibold text-purple-600 mb-2">Growth Opportunity</div>
              <p className="text-gray-700">Strategic AI implementation offers exponential growth potential through enhanced operational efficiency, accelerated sales cycles, and improved customer experiences—driving both top and bottom line results.</p>
            </div>
            
            <div 
              className="p-5 shadow-sm border-l-4 border-purple-600" 
              style={{ 
                backgroundColor: '#ffffff',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.7s, transform 0.7s ease-in-out 0.7s'
              }}
            >
              <div className="text-xl font-semibold text-purple-600 mb-2">Cost of Inaction</div>
              <p className="text-gray-700">Beyond missed opportunities, the existential risk of digital stagnation grows daily. As AI adoption accelerates across industries, the competitive disadvantage compounds, making later transformation increasingly difficult.</p>
            </div>
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
          <span className="text-xs text-gray-500">3</span>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
