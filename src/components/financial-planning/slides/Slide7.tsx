import React from 'react';
import '../styles/SlideStyles.css';

/**
 * Slide7 component - Sales
 * 
 * Seventh slide in the financial planning presentation
 * Displays the sales pillar with a timeline of components
 * 
 * @returns {JSX.Element} The rendered Slide7 component
 */
const Slide7: React.FC = () => {
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
        <div className="mt-16 mb-8">
          <h1 className="text-4xl font-normal text-gray-900">02 | Sales</h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-4 text-gray-700">AI-powered sales acceleration through an intelligent, optimized pipeline:</p>
        </div>
        
        {/* Content Area with Timeline */}
        <div className="mb-6">
          <div className="flex justify-between items-start mt-10 relative">
            {/* Timeline connector line */}
            <div className="absolute h-0.5 bg-purple-100 top-7 left-0 right-0 z-0"></div>
            
            {/* Lead Generation */}
            <div className="w-1/4 px-2 relative z-10">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                </svg>
              </div>
              <div className="bg-gray-50 p-5 h-40 flex flex-col shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Lead Generation Systems</h3>
                <p className="text-gray-600 text-sm">Automated lead scraping, qualification, and prioritization from multiple sources.</p>
              </div>
            </div>
            
            {/* Outbound Campaigns */}
            <div className="w-1/4 px-2 relative z-10">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </div>
              <div className="bg-gray-50 p-5 h-40 flex flex-col shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Outbound Email Campaigns</h3>
                <p className="text-gray-600 text-sm">Personalized outreach optimized for conversion based on prospect's market position.</p>
              </div>
            </div>
            
            {/* Lead Scoring */}
            <div className="w-1/4 px-2 relative z-10">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <div className="bg-gray-50 p-5 h-40 flex flex-col shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Lead Scoring &amp; Pipeline</h3>
                <p className="text-gray-600 text-sm">Intelligent scoring and auto-responders for timely follow-ups and lead nurturing.</p>
              </div>
            </div>
            
            {/* Call Analysis */}
            <div className="w-1/4 px-2 relative z-10">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="bg-gray-50 p-5 h-40 flex flex-col shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Call Transcript Analysis</h3>
                <p className="text-gray-600 text-sm">Virtual assistants that transcribe calls, analyze content, and identify next steps.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <p className="font-semibold text-gray-800 flex items-center">
              <svg className="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
              </svg>
              <span>Value: Never run out of prospects with AI-powered lead generation and increase close rates with intelligent scoring and follow-up systems.</span>
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
          <span className="text-sm text-gray-500">7</span>
        </div>
      </div>
    </div>
  );
};

export default Slide7;
