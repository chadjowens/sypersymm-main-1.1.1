import React from 'react';
import FractalBackground from '../components/FractalBackground';
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
      <FractalBackground />
      
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
              <div className="enhanced-icon-container">
                <svg className="enhanced-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"></path>
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
              <div className="enhanced-icon-container">
                <svg className="enhanced-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"></path>
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
              <div className="enhanced-icon-container">
                <svg className="enhanced-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"></path>
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
              <div className="enhanced-icon-container">
                <svg className="enhanced-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path>
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
