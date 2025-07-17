import React, { useState, useEffect } from 'react';
import FractalBackground from '../components/FractalBackground';
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
  // Animation visibility state
  const [isVisible, setIsVisible] = useState(false);
  
  // Set visibility after component mounts for animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  // Common styles for consistent layout
  const stepContainerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '24px',
    paddingBottom: '12px',
    borderBottom: '1px solid rgba(138, 43, 226, 0.2)',
    width: '100%'
  };

  const stepNumberStyle = {
    fontSize: '4rem',
    fontWeight: 800,
    background: 'linear-gradient(90deg, #000000, #8A2BE2)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    lineHeight: 1,
    minWidth: '60px',
    textAlign: 'left' as const
  };

  const stepContentStyle = {
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    width: '100%'
  };

  const headingStyle = {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: '#4B0082',
    textAlign: 'left' as const,
    width: '100%',
    display: 'block'
  };

  const paragraphStyle = {
    color: '#333333',
    textAlign: 'left' as const,
    width: '100%',
    display: 'block'
  };

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
            textAlign: 'left',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.98)',
            transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out'
          }}
        >
          <h1 className="text-2xl font-bold inline-block leading-tight tracking-tight" style={{
            background: 'linear-gradient(90deg, #000000, #8A2BE2)',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>
            Next Steps
          </h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
        </div>
        
        {/* Content Area */}
        <div className="mb-8" style={{ width: '100%', textAlign: 'left' }}>
          {/* Step 1 */}
          <div 
            style={{
              ...stepContainerStyle,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.98)',
              transition: 'opacity 0.7s ease-in-out 0.3s, transform 0.7s ease-in-out 0.3s'
            }}
          >
            <div style={stepNumberStyle}>1</div>
            <div style={stepContentStyle}>
              <h3 style={headingStyle}>Discovery Session</h3>
              <p style={paragraphStyle}>Schedule a detailed discovery session to align on specific business goals, priorities, and timeline expectations.</p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div 
            style={{
              ...stepContainerStyle,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.98)',
              transition: 'opacity 0.7s ease-in-out 0.5s, transform 0.7s ease-in-out 0.5s'
            }}
          >
            <div style={stepNumberStyle}>2</div>
            <div style={stepContentStyle}>
              <h3 style={headingStyle}>Customized Roadmap</h3>
              <p style={paragraphStyle}>Develop a tailored implementation roadmap with specific milestones and deliverables for each phase.</p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div 
            style={{
              ...stepContainerStyle,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.98)',
              transition: 'opacity 0.7s ease-in-out 0.7s, transform 0.7s ease-in-out 0.7s'
            }}
          >
            <div style={stepNumberStyle}>3</div>
            <div style={stepContentStyle}>
              <h3 style={headingStyle}>Kickoff Meeting</h3>
              <p style={paragraphStyle}>Conduct a formal kickoff meeting with all stakeholders to establish communication channels and begin implementation.</p>
            </div>
          </div>
          
          {/* Step 4 */}
          <div 
            style={{
              ...stepContainerStyle, 
              borderBottom: 'none',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.98)',
              transition: 'opacity 0.7s ease-in-out 0.9s, transform 0.7s ease-in-out 0.9s'
            }}
          >
            <div style={stepNumberStyle}>4</div>
            <div style={stepContentStyle}>
              <h3 style={headingStyle}>Implementation Kickoff</h3>
              <p style={paragraphStyle}>Begin with the Foundation phase while planning for subsequent Sales, Servicing, and Analytics initiatives.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="footer absolute bottom-0 w-full py-3 px-10 flex justify-between items-center border-t border-gray-200 bg-white z-10"> 
        <div className="slide-footer-logo relative inline-block">
          SUPER{'{SYMMETRY}'}
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 mr-3">Confidential</span>
          <span className="text-xs text-gray-500">12</span>
        </div>
      </div>
    </div>
  );
};

export default Slide12;
