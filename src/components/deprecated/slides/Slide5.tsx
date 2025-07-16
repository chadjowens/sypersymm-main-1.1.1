import React from 'react';
import { SlideProps } from './SlideInterface';
import './SlideStyles.css';

/**
 * Slide 5: Our Engagement Approach with step visualization
 * 
 * @param {SlideProps} props - Component props
 * @returns {JSX.Element} The rendered Slide5 component
 */
const Slide5: React.FC<SlideProps> = ({ businessName = 'YourCompany' }) => {
  return (
    <div>
      {/* Title Section with good spacing from top */}
      <div className="mt-24 mb-8 text-center">
        <h1 className="gradient-header">{businessName}'s Engagement Approach</h1>
        <div className="w-32 h-1 bg-purple-600 mt-4 mx-auto"></div>
      </div>
      
      {/* Content Area */}
      <div className="flex flex-col items-center justify-center mb-8">
        <p className="text-xl text-gray-700 text-center mb-8 max-w-3xl">
          Supersymmetry offers a structured approach through five core pillars that work together as a comprehensive transformation system:
        </p>
        
        <div className="stair-step relative w-full max-w-4xl mx-auto">
          {/* Step 1: Foundation */}
          <div className="step-block" style={{left: '60px', top: '190px', backgroundColor: 'rgba(255, 87, 51, 0.7)', zIndex: 5}}>
            <div className="step-content">
              <div className="step-number">01</div>
              <div className="step-separator">|</div>
              <div className="step-text">Foundation</div>
            </div>
          </div>
          
          {/* Step 2: Sales */}
          <div className="step-block" style={{left: '180px', top: '145px', backgroundColor: 'rgba(255, 152, 0, 0.7)', zIndex: 4}}>
            <div className="step-content">
              <div className="step-number">02</div>
              <div className="step-separator">|</div>
              <div className="step-text">Sales</div>
            </div>
          </div>
          
          {/* Step 3: Servicing */}
          <div className="step-block" style={{left: '300px', top: '100px', backgroundColor: 'rgba(139, 195, 74, 0.7)', zIndex: 3}}>
            <div className="step-content">
              <div className="step-number">03</div>
              <div className="step-separator">|</div>
              <div className="step-text">Servicing</div>
            </div>
          </div>
          
          {/* Step 4: Analytics & Optimization */}
          <div className="step-block" style={{left: '420px', top: '55px', backgroundColor: 'rgba(33, 150, 243, 0.7)', zIndex: 2, width: '260px'}}>
            <div className="step-content">
              <div className="step-number">04</div>
              <div className="step-separator">|</div>
              <div className="step-text">Optimization</div>
            </div>
          </div>
          
          {/* Step 5: Scaling */}
          <div className="step-block" style={{left: '580px', top: '10px', backgroundColor: 'rgba(156, 39, 176, 0.7)', zIndex: 1}}>
            <div className="step-content">
              <div className="step-number">05</div>
              <div className="step-separator">|</div>
              <div className="step-text">Scaling</div>
            </div>
          </div>
        </div>
        
        {/* Education Bar */}
        <div className="education-bar">
          Each phase builds upon the previous, creating a sustainable growth trajectory
        </div>
      </div>
    </div>
  );
};

export default Slide5;
