import React from 'react';
import FractalBackground from '../components/FractalBackground';
import '../styles/SlideStyles.css';

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
      <FractalBackground />
      
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
      <div className="absolute bottom-0 left-0 right-0 w-full py-3 px-10 flex justify-between items-center border-t border-gray-200 bg-white bg-opacity-80 z-20">
        <div className="slide-footer-logo relative inline-block">
          SUPER{'{SYMMETRY}'}
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 mr-3">Confidential</span>
          <span className="text-xs text-gray-500">1</span>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
