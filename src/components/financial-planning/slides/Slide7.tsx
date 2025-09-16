import React, { useState, useEffect } from 'react';
import FractalBackground from '../components/FractalBackground';
import '../styles/SlideStyles.css';

// Custom styles for this slide
const contentBoxStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Lighter background
  boxShadow: '0 4px 10px -2px rgba(0, 0, 0, 0.06)' // Reduced drop shadow
};

/**
 * Slide7 component - Sales
 * 
 * Seventh slide in the financial planning presentation
 * Displays the sales pillar with a timeline of components
 * 
 * @returns {JSX.Element} The rendered Slide7 component
 */
const Slide7: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visible after component mounts to trigger animations
    setIsVisible(true);
  }, []);
  
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
        <div 
          className="mt-12 mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.98)',
            transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out'
          }}
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">02 | Sales</h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-4 text-gray-800">AI-powered sales acceleration through an intelligent, optimized pipeline:</p>
        </div>
        
        {/* Content Area with Timeline */}
        <div className="mb-12">
          <div className="flex justify-between items-start mt-6 relative">
            {/* Animated dotted timeline connector line */}
            <div 
              className="absolute animated-dotted-line top-7 left-0 right-0 z-0"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.7s ease-in-out 1.6s'
              }}
            ></div>
            
            {/* Lead Generation - Using Material Symbols */}
            <div 
              className="flex-1 px-2 relative z-10 flex flex-col items-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.4s, transform 0.7s ease-in-out 0.4s'
              }}
            >
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
              <div className="content-box" style={contentBoxStyle}>
                <h3 className="content-box-header">Lead Generation Systems</h3>
                <p className="content-box-text">Automated lead scraping, qualification, and prioritization from multiple sources.</p>
              </div>
            </div>
            
            {/* Outbound Campaigns - Using Material Symbols */}
            <div 
              className="flex-1 px-2 relative z-10 flex flex-col items-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.8s, transform 0.7s ease-in-out 0.8s'
              }}
            >
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
              <div className="content-box" style={contentBoxStyle}>
                <h3 className="content-box-header">Outbound Email Campaigns</h3>
                <p className="content-box-text">Personalized outreach optimized for conversion based on prospect's market position.</p>
              </div>
            </div>
            
            {/* Lead Scoring & Pipeline - Using Material Symbols */}
            <div 
              className="flex-1 px-2 relative z-10 flex flex-col items-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 1.2s, transform 0.7s ease-in-out 1.2s'
              }}
            >
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
              <div className="content-box" style={contentBoxStyle}>
                <h3 className="content-box-header">Lead Scoring &amp; Pipeline</h3>
                <p className="content-box-text">Intelligent scoring and auto-responders for timely follow-ups and lead nurturing.</p>
              </div>
            </div>
            
            {/* Call Transcript Analysis - Using Material Symbols */}
            <div 
              className="flex-1 px-2 relative z-10 flex flex-col items-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 1.6s, transform 0.7s ease-in-out 1.6s'
              }}
            >
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
              <div className="content-box" style={contentBoxStyle}>
                <h3 className="content-box-header">Call Transcript Analysis</h3>
                <p className="content-box-text">Virtual assistants that transcribe calls, analyze content, and identify next steps.</p>
              </div>
            </div>
            
            {/* Inbound AI SDR - Using Material Symbols */}
            <div 
              className="flex-1 px-2 relative z-10 flex flex-col items-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 2.0s, transform 0.7s ease-in-out 2.0s'
              }}
            >
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
                  smart_toy
                </span>
              </div>
              <div className="content-box" style={contentBoxStyle}>
                <h3 className="content-box-header">Inbound AI SDR</h3>
                <p className="content-box-text">End-to-end AI-powered SDR workflow: verifies leads, enriches data, writes personalized scripts for email, text or calls and follows up automatically.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <div 
              className="bg-gray-50 p-1 rounded-lg border border-gray-200 flex items-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 2.4s, transform 0.7s ease-in-out 2.4s',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              <span 
                className="material-symbols-outlined animated-gradient-text" 
                style={{ 
                  fontSize: '24px',
                  marginRight: '12px'
                }}
              >
                bolt
              </span>
              <span className="text-xs text-gray-600">Never run out of prospects with AI-powered lead generation and increase close rates with intelligent scoring and follow-up systems.</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with logo and page numbering */}
      <div 
        className="absolute bottom-0 w-full py-3 px-10 flex justify-between items-center border-t border-gray-200 z-20" 
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      >
        <div className="slide-footer-logo relative inline-block">
          SUPER{'{SYMMETRY}'}
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 mr-3">Confidential</span>
          <span className="text-xs text-gray-500">7</span>
        </div>
      </div>
    </div>
  );
};

export default Slide7;
