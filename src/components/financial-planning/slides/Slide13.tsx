import React from 'react';
import '../styles/SlideStyles.css';

/**
 * Slide13 - Thank You
 * 
 * Final slide with thank you message, contact information, and CTA
 * Includes company logo, contact card, and call-to-action button
 * 
 * @returns {JSX.Element} The rendered Slide13 component
 */
const Slide13: React.FC = () => {
  return (
    <div className="slide" style={{ backgroundColor: '#ffffff' }}>
      {/* Fractal Pattern Background */}
      <svg className="fractal-background" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style={{ backgroundColor: '#ffffff' }}>
        <pattern id="fractal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 50 L25 25 L50 50 L75 25 L100 50 L75 75 L50 50 L25 75 Z" fill="none" stroke="#8A2BE2" strokeWidth="0.5" opacity="0.6"></path>
          <path d="M0 0 L50 50 L0 100 M100 0 L50 50 L100 100" fill="none" stroke="#5D3FD3" strokeWidth="0.3" opacity="0.4"></path>
          <path d="M25 0 L25 100 M75 0 L75 100 M0 25 L100 25 M0 75 L100 75" fill="none" stroke="#C9A0DC" strokeWidth="0.2" opacity="0.3"></path>
        </pattern>
        <rect width="100%" height="100%" fill="url(#fractal-pattern)"></rect>
      </svg>
      
      <div className="content px-16">
        {/* Title Section with good spacing from top */}
        <div className="mt-16 mb-8 text-center">
          <h1 className="title text-4xl" style={{ color: '#1A202C', fontWeight: 700 }}>Thank You</h1>
          <div className="h-1 bg-purple-600 mt-3 mx-auto" style={{ width: '80px' }}></div>
        </div>
        
        {/* Content Area */}
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <div className="big-logo mb-6" style={{ 
            fontWeight: 800,
            fontSize: '32px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            position: 'relative',
            display: 'inline-block'
          }}>
            <span style={{ 
              background: 'linear-gradient(90deg, #000000, #8A2BE2)', 
              WebkitBackgroundClip: 'text', 
              color: 'transparent' 
            }}>
              SUPER{'{SYMMETRY}'}
            </span>
          </div>
          
          <p className="text-xl mb-8 max-w-2xl" style={{ 
            fontSize: '20px', 
            fontWeight: 'normal', 
            color: 'rgb(0, 0, 0)', 
            textAlign: 'center' 
          }}>
            Thank you for considering Supersymmetry as your AI transformation partner. Let's build a future where technology amplifies human potential.
          </p>
          
          <div className="contact-card mb-6" style={{ 
            padding: '24px',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#2D3748' }}>Ready to transform your business?</h3>
            
            <div className="flex justify-center items-center mb-6">
              <p className="text-lg" style={{ color: '#4A5568' }}>
                <span className="font-medium" style={{ color: '#2D3748' }}>Chad Owens</span>
                <span className="dot-separator" style={{ 
                  display: 'inline-block',
                  margin: '0 8px',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#6B7280'
                }}></span>
                <span style={{ color: '#4A5568' }}>chad.owens@supersymm.io</span>
                <span className="dot-separator" style={{ 
                  display: 'inline-block',
                  margin: '0 8px',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#6B7280'
                }}></span>
                <span style={{ color: '#4A5568' }}>(214) 205-2773</span>
              </p>
            </div>
            
            <a href="#" className="cta-button" style={{ 
              display: 'inline-block',
              backgroundColor: '#8A2BE2',
              color: 'white',
              fontWeight: 600,
              padding: '12px 24px',
              borderRadius: '6px',
              transition: 'all 0.2s ease'
            }}>
              Schedule Your Discovery Session
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer with logo and page numbering */}
      <div className="footer" style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid #e2e8f0',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 20
      }}>
        <div className="logo" style={{ 
          fontSize: '20px', 
          color: 'transparent', 
          background: 'linear-gradient(90deg, #000000, #8A2BE2)', 
          WebkitBackgroundClip: 'text',
          position: 'relative',
          display: 'inline-block',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          SUPER{'{SYMMETRY}'}
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-4">Confidential</span>
          <span className="text-sm text-gray-500">13</span>
        </div>
      </div>
    </div>
  );
};

export default Slide13;
