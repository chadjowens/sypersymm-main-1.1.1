import React from 'react';
import FractalBackground from '../components/FractalBackground';
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
      <FractalBackground />
      
      <div className="relative z-10 px-16 h-full flex flex-col" style={{ backgroundColor: 'transparent' }}>
        {/* Title Section with good spacing from top */}
        <div className="mt-12 mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">02 | Sales</h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-4 text-gray-800">AI-powered sales acceleration through an intelligent, optimized pipeline:</p>
        </div>
        
        {/* Content Area with Timeline */}
        <div className="mb-12">
          <div className="flex justify-between items-start mt-6 relative">
            {/* Animated dotted timeline connector line */}
            <div className="absolute animated-dotted-line top-7 left-0 right-0 z-0"></div>
            
            {/* Lead Generation - Using Material Symbols */}
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
                  filter_alt
                </span>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Lead Generation Systems</h3>
                <p className="content-box-text">Automated lead scraping, qualification, and prioritization from multiple sources.</p>
              </div>
            </div>
            
            {/* Outbound Campaigns - Using Material Symbols */}
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
                  outgoing_mail
                </span>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Outbound Email Campaigns</h3>
                <p className="content-box-text">Personalized outreach optimized for conversion based on prospect's market position.</p>
              </div>
            </div>
            
            {/* Lead Scoring & Pipeline - Using Material Symbols */}
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
                  readiness_score
                </span>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Lead Scoring &amp; Pipeline</h3>
                <p className="content-box-text">Intelligent scoring and auto-responders for timely follow-ups and lead nurturing.</p>
              </div>
            </div>
            
            {/* Call Transcript Analysis - Using Material Symbols */}
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
                  speech_to_text
                </span>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Call Transcript Analysis</h3>
                <p className="content-box-text">Virtual assistants that transcribe calls, analyze content, and identify next steps.</p>
              </div>
            </div>
          </div>
          
          <div className="value-container">
            <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path>
            </svg>
            <p className="value-text">Value: Never run out of prospects with AI-powered lead generation and increase close rates with intelligent scoring and follow-up systems.</p>
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
          <span className="text-sm text-gray-500">7</span>
        </div>
      </div>
    </div>
  );
};

export default Slide7;
