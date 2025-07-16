import React from 'react';
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
      <svg className="absolute top-0 left-0 w-full h-full opacity-15 z-0" xmlns="http://www.w3.org/2000/svg">
        <pattern id="fractal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 50 L25 25 L50 50 L75 25 L100 50 L75 75 L50 50 L25 75 Z" fill="none" stroke="#8A2BE2" strokeWidth="0.5" opacity="0.6"></path>
          <path d="M0 0 L50 50 L0 100 M100 0 L50 50 L100 100" fill="none" stroke="#5D3FD3" strokeWidth="0.3" opacity="0.4"></path>
          <path d="M25 0 L25 100 M75 0 L75 100 M0 25 L100 25 M0 75 L100 75" fill="none" stroke="#C9A0DC" strokeWidth="0.2" opacity="0.3"></path>
        </pattern>
        <rect width="100%" height="100%" fill="url(#fractal-pattern)"></rect>
      </svg>
      
      <div className="relative z-10 px-16 h-full flex flex-col" style={{ backgroundColor: 'transparent' }}>
        {/* Title Section with good spacing from top */}
        <div className="mt-12 mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">
            Implications for {businessName}
          </h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-4 text-gray-800">What these AI transformation trends mean for your organization:</p>
        </div>
        
        {/* Content Area */}
        <div className="mb-12">
          <div className="grid grid-cols-1 gap-2">
            <div className="p-5 shadow-sm border-l-4 border-purple-600" style={{ backgroundColor: '#ffffff' }}>
              <div className="text-xl font-semibold text-purple-600 mb-2">Competitive Pressure</div>
              <p className="text-gray-700">The rapid adoption of AI solutions is creating a widening gap between digital leaders and laggards. Organizations that delay transformation risk falling permanently behind as competitors leverage AI for efficiency and growth.</p>
            </div>
            
            <div className="p-5 shadow-sm border-l-4 border-purple-600" style={{ backgroundColor: '#ffffff' }}>
              <div className="text-xl font-semibold text-purple-600 mb-2">Growth Opportunity</div>
              <p className="text-gray-700">Strategic AI implementation offers exponential growth potential through enhanced operational efficiency, accelerated sales cycles, and improved customer experiences—driving both top and bottom line results.</p>
            </div>
            
            <div className="p-5 shadow-sm border-l-4 border-purple-600" style={{ backgroundColor: '#ffffff' }}>
              <div className="text-xl font-semibold text-purple-600 mb-2">Cost of Inaction</div>
              <p className="text-gray-700">Beyond missed opportunities, the existential risk of digital stagnation grows daily. As AI adoption accelerates across industries, the competitive disadvantage compounds, making later transformation increasingly difficult.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with logo and page numbering */}
      <div 
        className="absolute bottom-0 w-full py-5 px-10 flex justify-between items-center border-t border-gray-200 z-20" 
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="font-extrabold text-xl uppercase tracking-wider bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent relative inline-block">
          SUPER{'{SYMMETRY}'}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"></span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-4">Confidential</span>
          <span className="text-sm text-gray-500">3</span>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
