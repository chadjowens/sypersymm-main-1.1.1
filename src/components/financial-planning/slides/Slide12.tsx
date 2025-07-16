import React from 'react';
import '../styles/SlideStyles.css';

/**
 * Slide12 - Next Steps
 * 
 * Displays the next steps in the engagement process
 * Includes numbered steps with descriptions
 * 
 * @returns {JSX.Element} The rendered Slide12 component
 */
const Slide12: React.FC = () => {
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
      <svg className="absolute top-0 left-0 w-full h-full opacity-25 z-0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <linearGradient id="animated-gradient-slide12" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0077ff">
              <animate attributeName="stop-color" values="#0077ff; #ff69b4; #0077ff" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#ff69b4">
              <animate attributeName="stop-color" values="#ff69b4; #0077ff; #ff69b4" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#0077ff">
              <animate attributeName="stop-color" values="#0077ff; #ff69b4; #0077ff" dur="8s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <pattern id="fractal-pattern-slide12" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 50 L25 25 L50 50 L75 25 L100 50 L75 75 L50 50 L25 75 Z" fill="none" stroke="url(#animated-gradient-slide12)" strokeWidth="0.8" opacity="0.7"></path>
          <path d="M0 0 L50 50 L0 100 M100 0 L50 50 L100 100" fill="none" stroke="url(#animated-gradient-slide12)" strokeWidth="0.6" opacity="0.6"></path>
          <path d="M25 0 L25 100 M75 0 L75 100 M0 25 L100 25 M0 75 L100 75" fill="none" stroke="url(#animated-gradient-slide12)" strokeWidth="0.4" opacity="0.5"></path>
        </pattern>
        <rect width="100%" height="100%" fill="url(#fractal-pattern-slide12)"></rect>
      </svg>
      
      <div className="relative z-10 px-16 h-full flex flex-col" style={{ backgroundColor: 'transparent' }}>
        {/* Title Section with good spacing from top */}
        <div className="mt-12 mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">
            Next Steps
          </h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
        </div>
        
        {/* Content Area */}
        <div className="mb-8">
          <div className="step-container" style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            marginBottom: '24px', 
            paddingBottom: '12px', 
            borderBottom: '1px solid rgba(138, 43, 226, 0.2)' 
          }}>
            <div className="step-number" style={{ 
              fontSize: '4rem', 
              fontWeight: 800, 
              color: '#8A2BE2', 
              opacity: 0.85, 
              lineHeight: 1 
            }}>1</div>
            <div className="step-content" style={{ paddingLeft: '20px' }}>
              <h3 className="font-semibold text-xl mb-2">Discovery Session</h3>
              <p className="text-gray-700">Schedule a detailed discovery session to align on specific business goals, priorities, and timeline expectations.</p>
            </div>
          </div>
          
          <div className="step-container" style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            marginBottom: '24px', 
            paddingBottom: '12px', 
            borderBottom: '1px solid rgba(138, 43, 226, 0.2)' 
          }}>
            <div className="step-number" style={{ 
              fontSize: '4rem', 
              fontWeight: 800, 
              color: '#8A2BE2', 
              opacity: 0.85, 
              lineHeight: 1 
            }}>2</div>
            <div className="step-content" style={{ paddingLeft: '20px' }}>
              <h3 className="font-semibold text-xl mb-2">Customized Roadmap</h3>
              <p className="text-gray-700">Develop a tailored implementation roadmap with specific milestones and deliverables for each phase.</p>
            </div>
          </div>
          
          <div className="step-container" style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            marginBottom: '24px', 
            paddingBottom: '12px', 
            borderBottom: '1px solid rgba(138, 43, 226, 0.2)' 
          }}>
            <div className="step-number" style={{ 
              fontSize: '4rem', 
              fontWeight: 800, 
              color: '#8A2BE2', 
              opacity: 0.85, 
              lineHeight: 1 
            }}>3</div>
            <div className="step-content" style={{ paddingLeft: '20px' }}>
              <h3 className="font-semibold text-xl mb-2">Agreement Finalization</h3>
              <p className="text-gray-700">Finalize partnership agreement with clear terms, performance metrics, and success criteria.</p>
            </div>
          </div>
          
          <div className="step-container" style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            marginBottom: '24px', 
            paddingBottom: '12px',
            borderBottom: 'none'
          }}>
            <div className="step-number" style={{ 
              fontSize: '4rem', 
              fontWeight: 800, 
              color: '#8A2BE2', 
              opacity: 0.85, 
              lineHeight: 1 
            }}>4</div>
            <div className="step-content" style={{ paddingLeft: '20px' }}>
              <h3 className="font-semibold text-xl mb-2">Implementation Kickoff</h3>
              <p className="text-gray-700">Begin with the Foundation phase while planning for subsequent Sales, Servicing, and Analytics initiatives.</p>
            </div>
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
          <span className="text-sm text-gray-500">12</span>
        </div>
      </div>
    </div>
  );
};

export default Slide12;
