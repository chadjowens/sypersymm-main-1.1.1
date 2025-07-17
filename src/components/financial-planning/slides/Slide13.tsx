import React, { useState, useEffect } from 'react';
import FractalBackground from '../components/FractalBackground';
import '../styles/SlideStyles.css';
import { PopupModal } from 'react-calendly';

/**
 * Slide13 - Thank You
 * 
 * Final slide with thank you message, contact information, and CTA
 * Includes company logo, contact card, and call-to-action button
 * 
 * @returns {JSX.Element} The rendered Slide13 component
 */
const Slide13: React.FC = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  // Animation visibility state
  const [isVisible, setIsVisible] = useState(false);
  
  // Set visibility after component mounts for animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
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
          className="mt-16 mb-8 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.98)',
            transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out'
          }}
        >
          <h1 className="title text-4xl" style={{ 
            fontWeight: 700,
            background: 'linear-gradient(90deg, #000000, #8A2BE2)',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>Thank You</h1>
          <div className="h-1 bg-purple-600 mt-3 mx-auto" style={{ width: '80px' }}></div>
        </div>
        
        {/* Content Area */}
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <div 
            className="slide-footer-logo mb-6" 
            style={{ 
              fontSize: '32px',
              position: 'relative',
              display: 'inline-block',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.98)',
              transition: 'opacity 0.7s ease-in-out 0.3s, transform 0.7s ease-in-out 0.3s'
            }}
          >
            SUPER{'{SYMMETRY}'}
          </div>
          
          <p 
            className="text-xl mb-8 max-w-2xl" 
            style={{ 
              fontSize: '20px', 
              fontWeight: 'normal', 
              color: '#2D3748', 
              textAlign: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.98)',
              transition: 'opacity 0.7s ease-in-out 0.5s, transform 0.7s ease-in-out 0.5s'
            }}
          >
            Thank you for considering Supersymmetry as your AI transformation partner. Let's build a future where technology amplifies human potential.
          </p>
          
          <div 
            className="contact-card mb-6" 
            style={{ 
              padding: '24px',
              borderRadius: '0',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
              maxWidth: '600px',
              margin: '0 auto',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.98)',
              transition: 'opacity 0.7s ease-in-out 0.7s, transform 0.7s ease-in-out 0.7s'
            }}
          >
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#1A202C' }}>Ready to transform your business?</h3>
            
            <div className="flex justify-center items-center mb-6">
              <p className="text-lg" style={{ color: '#4A5568' }}>
                <span className="font-medium" style={{ color: '#1A202C' }}>Chad Owens</span>
                <span className="dot-separator" style={{ 
                  display: 'inline-block',
                  margin: '0 8px',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#6B7280'
                }}></span>
                <span style={{ color: '#2D3748' }}>chad.owens@supersymm.io</span>
                <span className="dot-separator" style={{ 
                  display: 'inline-block',
                  margin: '0 8px',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#6B7280'
                }}></span>
                <span style={{ color: '#2D3748' }}>(214) 205-2773</span>
              </p>
            </div>
            
            <button 
              className="cta-button mt-6" 
              onClick={() => setIsCalendlyOpen(true)}
              style={{ 
                backgroundColor: '#8A2BE2',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '0',
                fontWeight: 600,
                fontSize: '18px',
                cursor: 'pointer',
                border: 'none',
                boxShadow: '0 4px 6px rgba(138, 43, 226, 0.25)',
                transition: 'all 0.2s ease-in-out',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transitionProperty: 'opacity, transform, background-color, box-shadow',
                transitionDuration: '0.7s, 0.7s, 0.2s, 0.2s',
                transitionTimingFunction: 'ease-in-out',
                transitionDelay: '0.9s, 0.9s, 0s, 0s'
              }}
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer with logo and page numbering */}
      <div 
        className="absolute bottom-0 w-full py-3 px-10 flex justify-between items-center border-t border-gray-200 z-20" 
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="slide-footer-logo relative inline-block">
          SUPER{'{SYMMETRY}'}
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 mr-3">Confidential</span>
          <span className="text-xs text-gray-500">13</span>
        </div>
      </div>
      
      {/* Calendly Modal */}
      {isCalendlyOpen && (
        <PopupModal
          url="https://calendly.com/chad-owens-supersymm/30min"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.getElementById('root') || document.body}
        />
      )}
    </div>
  );
};

export default Slide13;
