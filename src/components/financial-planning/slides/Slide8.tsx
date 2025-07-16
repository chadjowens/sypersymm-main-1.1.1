import React from 'react';
import FractalBackground from '../components/FractalBackground';
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
      <FractalBackground />
      
      <div className="relative z-10 px-16 h-full flex flex-col" style={{ backgroundColor: 'transparent' }}>
        {/* Title Section with good spacing from top */}
        <div className="mt-12 mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">03 | Servicing (Client &amp; Team Experience)</h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-4 text-gray-800">Optimizing knowledge, service and support through advanced automation and personalized interactions.</p>
        </div>
        
        {/* Content Area with Timeline */}
        <div className="mb-12">
          <div className="flex justify-between items-start mt-6 relative">
            {/* Timeline connector line */}
            <div className="absolute h-0.5 bg-purple-100 top-7 left-8 right-8 z-0"></div>
            
            {/* Onboarding */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div className="enhanced-icon-container">
                <svg className="enhanced-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"></path>
                </svg>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Customer Onboarding</h3>
                <p className="content-box-text">Streamlined welcome process with automated calls, document distribution, and client intake.</p>
              </div>
            </div>
            
            {/* Self-Service Portal */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div className="enhanced-icon-container">
                <svg className="enhanced-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Self-Service Portal</h3>
                <p className="content-box-text">24/7 client portal with automated onboarding and form distribution for immediate access.</p>
              </div>
            </div>
            
            {/* Multi-modal Chat */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div className="enhanced-icon-container">
                <svg className="enhanced-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.89 9.89 0 01-8.484-3.772l-1.89-1.89c-1.247-1.247-1.247-3.28 0-4.527l1.89-1.89c1.247-1.247 3.28-1.247 4.527 0l4.527 4.527c1.247 1.247 1.247 3.28 0 4.527z"></path>
                </svg>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Multi-modal Chat</h3>
                <p className="content-box-text">AI conversations across platforms with instant chat-based Q&amp;A support.</p>
              </div>
            </div>
            
            {/* Meeting Automation */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div className="enhanced-icon-container">
                <svg className="enhanced-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L7.353 7.353m0 0L6.414 8l-2.829-2.828"></path>
                </svg>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Meeting Automation</h3>
                <p className="content-box-text">Smart scheduling, reminders, and follow-ups to optimize client meetings.</p>
              </div>
            </div>
            
            {/* Knowledge Base */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div className="enhanced-icon-container">
                <svg className="enhanced-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.477 6.364 9.268 5.12 7.5 4.397c-1.357-0.557-2.464-1.146-4.063-1.591C5.13 3.002 3.393 3.448 1.5 4.397a1 1 0 0 0-1.5 1.397zm0 1.104C4.666 7.379 7.316 9.038 10.666 12a3 3 0 00-10.666-7.334 1 1 0 01-1.5 1.397z"></path>
                </svg>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Knowledge Base</h3>
                <p className="content-box-text">Secure RAG-based repository with voice/chat access to business knowledge.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="value-container">
              <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
              </svg>
              <p className="value-text">Value: Provide instant, 24/7 personalized support while reducing response times from hours to seconds, improving satisfaction.</p>
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
          <span className="text-sm text-gray-500">8</span>
        </div>
      </div>
    </div>
  );
};

export default Slide8;
