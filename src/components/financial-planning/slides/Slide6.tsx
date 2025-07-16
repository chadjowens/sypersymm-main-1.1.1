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
        borderRadius: '12px',
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
        <div className="mt-16 mb-8">
          <h1 className="text-4xl font-normal text-gray-900">01 | Foundation</h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-4 text-gray-700">Establishing a robust digital infrastructure and presence essential for all subsequent initiatives.</p>
        </div>
        
        {/* Process Flow Timeline */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-5 mt-10 relative">
            {/* Timeline connector line */}
            <div className="absolute h-0.5 bg-purple-100 top-7 left-0 right-0 z-0"></div>
            
            {/* Step 1 */}
            <div className="flex-1 text-center px-2 relative z-10">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 h-40 flex flex-col justify-between shadow-sm">
                <h3 className="font-semibold text-xl text-gray-800">Website Migration</h3>
                <p className="text-gray-600 mt-2">High-performance hosting, domain management, lead capture landing pages</p>
                <div className="mt-auto text-xs text-gray-500">Phase 1</div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex-1 text-center px-2 relative z-10">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 h-40 flex flex-col justify-between shadow-sm">
                <h3 className="font-semibold text-xl text-gray-800">SEO Optimization</h3>
                <p className="text-gray-600 mt-2">Web chat implementation, search visibility, organic traffic growth</p>
                <div className="mt-auto text-xs text-gray-500">Phase 2</div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex-1 text-center px-2 relative z-10">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 h-40 flex flex-col justify-between shadow-sm">
                <h3 className="font-semibold text-xl text-gray-800">Social Media</h3>
                <p className="text-gray-600 mt-2">Consistent social presence with automated posting and content calendars</p>
                <div className="mt-auto text-xs text-gray-500">Phase 3</div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex-1 text-center px-2 relative z-10">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 h-40 flex flex-col justify-between shadow-sm">
                <h3 className="font-semibold text-xl text-gray-800">Content Creation</h3>
                <p className="text-gray-600 mt-2">Newsletters, whitepapers, e-books, and CTA optimization</p>
                <div className="mt-auto text-xs text-gray-500">Phase 4</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <p className="font-semibold text-gray-800 flex items-center">
              <svg className="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
              <span>Value: Eliminate dependence on third-party providers while gaining control over your digital presence and capturing more organic traffic.</span>
            </p>
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
          <span className="text-sm text-gray-500">6</span>
        </div>
      </div>
    </div>
  );
};

export default Slide6;
