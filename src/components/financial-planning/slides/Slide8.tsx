import React from 'react';
import '../styles/SlideStyles.css';

/**
 * Slide8 component - Servicing (Client & Team Experience)
 * 
 * Eighth slide in the financial planning presentation
 * Displays the servicing pillar with a timeline of components
 * 
 * @returns {JSX.Element} The rendered Slide8 component
 */
const Slide8: React.FC = () => {
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
          <h1 className="text-4xl font-normal text-gray-900">03 | Servicing (Client &amp; Team Experience)</h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-3 text-gray-700">Optimizing customer service and support through advanced automation, ensuring efficient and personalized interactions.</p>
        </div>
        
        {/* Content Area with Timeline */}
        <div className="mb-6">
          <div className="flex justify-between items-start mt-10 relative">
            {/* Timeline connector line */}
            <div className="absolute h-0.5 bg-purple-100 top-7 left-8 right-8 z-0"></div>
            
            {/* Customer Onboarding */}
            <div className="w-1/5 px-2 relative z-10 flex flex-col items-center">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                </svg>
              </div>
              <div className="bg-gray-50 p-5 h-50 w-full flex flex-col shadow-sm">
                <h3 className="font-semibold text-xl">Customer Onboarding</h3>
                <p className="text-gray-600 mt-2">Streamlined welcome process with automated calls, document distribution, and client intake.</p>
              </div>
            </div>
            
            {/* Self-Service Portal */}
            <div className="w-1/5 px-2 relative z-10 flex flex-col items-center">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="bg-gray-50 p-5 h-50 w-full flex flex-col shadow-sm">
                <h3 className="font-semibold text-xl">Self-Service Portal</h3>
                <p className="text-gray-600 mt-2">24/7 client portal with automated onboarding and form distribution for immediate access.</p>
              </div>
            </div>
            
            {/* Multi-modal Chat */}
            <div className="w-1/5 px-2 relative z-10 flex flex-col items-center">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="bg-gray-50 p-5 h-50 w-full flex flex-col shadow-sm">
                <h3 className="font-semibold text-xl">Multi-modal Chat</h3>
                <p className="text-gray-600 mt-2">AI conversations across platforms with instant chat-based Q&amp;A support.</p>
              </div>
            </div>
            
            {/* Meeting Automation */}
            <div className="w-1/5 px-2 relative z-10 flex flex-col items-center">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="bg-gray-50 p-5 h-50 w-full flex flex-col shadow-sm">
                <h3 className="font-semibold text-xl">Meeting Automation</h3>
                <p className="text-gray-600 mt-2">Smart scheduling, reminders, and follow-ups to optimize client meetings.</p>
              </div>
            </div>
            
            {/* Knowledge Base */}
            <div className="w-1/5 px-2 relative z-10 flex flex-col items-center">
              <div className="w-15 h-15 rounded-full bg-purple-50 flex items-center justify-center mb-4 border-2 border-purple-600" style={{ width: '60px', height: '60px' }}>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                </svg>
              </div>
              <div className="bg-gray-50 p-5 h-50 w-full flex flex-col shadow-sm">
                <h3 className="font-semibold text-xl">Knowledge Base</h3>
                <p className="text-gray-600 mt-2">Secure RAG-based repository with voice/chat access to business knowledge.</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-800 flex items-center">
                <svg className="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                </svg>
                <span>Value: Provide instant, 24/7 personalized support while reducing response times from hours to seconds, improving satisfaction.</span>
              </p>
            </div>
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
          <span className="text-sm text-gray-500">8</span>
        </div>
      </div>
    </div>
  );
};

export default Slide8;
