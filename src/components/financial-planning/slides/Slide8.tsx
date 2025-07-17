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
            {/* Animated dotted timeline connector line */}
            <div className="absolute animated-dotted-line top-7 left-8 right-8 z-0"></div>
            
            {/* Onboarding - Using Material Symbols */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div style={{ 
                marginBottom: '15px', 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                width: '60px', 
                height: '60px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}>
                <span 
                  className="material-symbols-outlined animated-gradient-text" 
                  style={{ 
                    fontSize: '48px'
                  }}
                >
                  person_raised_hand
                </span>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Customer Onboarding</h3>
                <p className="content-box-text">Streamlined welcome process with automated calls, document distribution, and client intake.</p>
              </div>
            </div>
            
            {/* Self-Service Portal - Using Material Symbols */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div style={{ 
                marginBottom: '15px', 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                width: '60px', 
                height: '60px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}>
                <span 
                  className="material-symbols-outlined animated-gradient-text" 
                  style={{ 
                    fontSize: '48px'
                  }}
                >
                  dashboard_customize
                </span>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Self-Service Portal</h3>
                <p className="content-box-text">24/7 client portal with automated onboarding and form distribution for immediate access.</p>
              </div>
            </div>
            
            {/* Multi-modal Chat - Using Material Symbols */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div style={{ 
                marginBottom: '15px', 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                width: '60px', 
                height: '60px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}>
                <span 
                  className="material-symbols-outlined animated-gradient-text" 
                  style={{ 
                    fontSize: '48px'
                  }}
                >
                  voice_chat
                </span>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Multi-modal Chat</h3>
                <p className="content-box-text">AI conversations across platforms with instant chat-based Q&amp;A support.</p>
              </div>
            </div>
            
            {/* Meeting Automation - Using Material Symbols */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div style={{ 
                marginBottom: '15px', 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                width: '60px', 
                height: '60px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}>
                <span 
                  className="material-symbols-outlined animated-gradient-text" 
                  style={{ 
                    fontSize: '48px'
                  }}
                >
                  calendar_clock
                </span>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Meeting Automation</h3>
                <p className="content-box-text">Smart scheduling, reminders, and follow-ups to optimize client meetings.</p>
              </div>
            </div>
            
            {/* Knowledge Base - Using Material Symbols */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div style={{ 
                marginBottom: '15px', 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                width: '60px', 
                height: '60px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}>
                <span 
                  className="material-symbols-outlined animated-gradient-text" 
                  style={{ 
                    fontSize: '48px'
                  }}
                >
                  network_intel_node
                </span>
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
