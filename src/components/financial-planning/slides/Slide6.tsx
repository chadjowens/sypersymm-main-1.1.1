import React from 'react';
import '../styles/SlideStyles.css';

/**
 * Slide6 component - Foundation
 * 
 * Sixth slide in the financial planning presentation
 * Displays the foundation pillar with a timeline of phases
 * 
 * @returns {JSX.Element} The rendered Slide6 component
 */
const Slide6: React.FC = () => {
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
          <linearGradient id="animated-gradient-slide6" x1="0%" y1="0%" x2="100%" y2="100%">
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
        <pattern id="fractal-pattern-slide6" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 50 L25 25 L50 50 L75 25 L100 50 L75 75 L50 50 L25 75 Z" fill="none" stroke="url(#animated-gradient-slide6)" strokeWidth="0.8" opacity="0.7"></path>
          <path d="M0 0 L50 50 L0 100 M100 0 L50 50 L100 100" fill="none" stroke="url(#animated-gradient-slide6)" strokeWidth="0.6" opacity="0.6"></path>
          <path d="M25 0 L25 100 M75 0 L75 100 M0 25 L100 25 M0 75 L100 75" fill="none" stroke="url(#animated-gradient-slide6)" strokeWidth="0.4" opacity="0.5"></path>
        </pattern>
        <rect width="100%" height="100%" fill="url(#fractal-pattern-slide6)"></rect>
      </svg>
      
      <div className="relative z-10 px-16 h-full flex flex-col" style={{ backgroundColor: 'transparent' }}>
        {/* Title Section with good spacing from top */}
        <div className="mt-12 mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">01 | Foundation</h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-4 text-gray-800">Establishing a robust digital infrastructure and presence essential for all subsequent initiatives.</p>
        </div>
        
        {/* Process Flow Timeline */}
        <div className="mb-12">
          <div className="flex justify-between items-start mb-5 mt-6 relative">
            {/* Timeline connector line */}
            <div className="absolute h-0.5 bg-purple-100 top-7 left-0 right-0 z-0"></div>
            
            {/* Step 1 */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Website Migration</h3>
                <p className="content-box-text">High-performance hosting, domain management, lead capture landing pages</p>
                <div className="content-box-phase">Phase 1</div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">SEO Optimization</h3>
                <p className="content-box-text">Web chat implementation, search visibility, organic traffic growth</p>
                <div className="content-box-phase">Phase 2</div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Social Media</h3>
                <p className="content-box-text">Consistent social presence with automated posting and content calendars</p>
                <div className="content-box-phase">Phase 3</div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Content Creation</h3>
                <p className="content-box-text">Newsletters, whitepapers, e-books, and CTA optimization</p>
                <div className="content-box-phase">Phase 4</div>
              </div>
            </div>
          </div>
          
          <div className="value-container">
            <svg className="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
            <p className="value-text">Value: Eliminate dependence on third-party providers while gaining control over your digital presence and capturing more organic traffic.</p>
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
          <span className="text-sm text-gray-500">6</span>
        </div>
      </div>
    </div>
  );
};

export default Slide6;
