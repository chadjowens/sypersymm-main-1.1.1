import React, { useState } from 'react';
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
            color: '#2D3748', 
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
              onClick={() => setIsCalendlyOpen(true)}
              className="cta-button" 
              style={{ 
                display: 'inline-block',
                backgroundColor: '#8A2BE2',
                color: 'white',
                fontWeight: 600,
                padding: '12px 24px',
                borderRadius: '6px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 6px rgba(138, 43, 226, 0.25)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer with logo and page numbering */}
      <div 
        className="absolute bottom-0 w-full py-5 px-10 flex justify-between items-center border-t border-gray-200 z-20" 
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="slide-footer-logo relative inline-block">
          SUPER{'{SYMMETRY}'}
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-4">Confidential</span>
          <span className="text-sm text-gray-500">13</span>
        </div>
      </div>
      
      {/* Calendly Modal */}
      {isCalendlyOpen && (
        <PopupModal
          url="https://calendly.com/supersymmetry/30min"
          onModalClose={() => setIsCalendlyOpen(false)}
          rootElement={document.getElementById('root')!}
          open={isCalendlyOpen}
        />
      )}
    </div>
  );
};

export default Slide13;
