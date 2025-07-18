import React, { useState, useEffect } from 'react';
import FractalBackground from '../components/FractalBackground';
import '../styles/SlideStyles.css';

// Custom styles for this slide
const contentBoxStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Lighter background
  boxShadow: '0 4px 10px -2px rgba(0, 0, 0, 0.06)' // Reduced drop shadow
};

/**
 * Slide6 component - Foundation
 * 
 * Sixth slide in the financial planning presentation
 * Displays the foundation pillar with a timeline of phases
 * 
 * @returns {JSX.Element} The rendered Slide6 component
 */
const Slide6: React.FC = () => {
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
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">01 | Foundation</h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-4 text-gray-800">Establishing a robust digital infrastructure and presence essential for all subsequent initiatives.</p>
        </div>
        
        {/* Process Flow Timeline */}
        <div className="mb-12">
          <div className="flex justify-between items-start mb-5 mt-6 relative">
            {/* Animated dotted timeline connector line */}
            <div 
              className="absolute animated-dotted-line top-7 left-0 right-0 z-0"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.7s ease-in-out 1.6s'
              }}
            ></div>
            
            {/* Step 1 - Website Migration (Material Symbols) */}
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
                  browse_activity
                </span>
              </div>
              <div className="content-box" style={contentBoxStyle}>
                <h3 className="content-box-header">Website Migration</h3>
                <p className="content-box-text">High-performance hosting, domain management, lead capture landing pages</p>
                
              </div>
            </div>
            
            {/* Step 2 - SEO Optimization (Material Symbols) */}
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
                  search_insights
                </span>
              </div>
              <div className="content-box" style={contentBoxStyle}>
                <h3 className="content-box-header">SEO Optimization</h3>
                <p className="content-box-text">Web chat implementation, search visibility, organic traffic growth</p>
                
              </div>
            </div>
            
            {/* Step 3 - Social Media (Material Symbols) */}
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
                  brand_awareness
                </span>
              </div>
              <div className="content-box" style={contentBoxStyle}>
                <h3 className="content-box-header">Social Media</h3>
                <p className="content-box-text">Consistent social presence with automated posting and content calendars</p>
                
              </div>
            </div>
            
            {/* Step 4 - Content Creation (Material Symbols) */}
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
                  auto_stories
                </span>
              </div>
              <div className="content-box" style={contentBoxStyle}>
                <h3 className="content-box-header">Content Creation</h3>
                <p className="content-box-text">Newsletters, whitepapers, e-books, and CTA optimization</p>
                
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <div 
              className="bg-gray-50 p-1 rounded-lg border border-gray-200 flex items-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 2.0s, transform 0.7s ease-in-out 2.0s',
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
              <span className="text-xs text-gray-600">Eliminate dependence on third-party providers while gaining control over your digital presence and capturing more organic traffic.</span>
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
          <span className="text-xs text-gray-500">6</span>
        </div>
      </div>
    </div>
  );
};

export default Slide6;
