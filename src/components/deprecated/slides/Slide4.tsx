import React from 'react';
import { SlideProps } from './SlideInterface';
import './SlideStyles.css';

/**
 * Slide 4: About Supersymmetry
 * 
 * @param {SlideProps} props - Component props
 * @returns {JSX.Element} The rendered Slide4 component
 */
const Slide4: React.FC<SlideProps> = ({ businessName = 'YourCompany' }) => {
  return (
    <div>
      {/* Title Section with good spacing from top */}
      <div className="mt-24 mb-8">
        <h1 className="gradient-header">About {businessName}</h1>
        <div className="w-24 h-1 bg-purple-600 mt-3"></div>
      </div>
      
      {/* Content Area */}
      <div className="mb-8">
        <div className="grid grid-cols-1 gap-2">
          <div className="info-card">
            <div className="card-title">Who We Are</div>
            <p className="text-gray-700">An AI transformation partner leveraging Agentic AI to position organizations at the forefront of the digital revolution. We specialize in creating intelligent, autonomous systems that act as powerful force multipliers for your business.</p>
          </div>
          
          <div className="info-card">
            <div className="card-title">What We Do</div>
            <p className="text-gray-700">We build, deploy, and accelerate your digital operations with intelligent agent teams that work across your ecosystem. Our solutions optimize lead generation, enhance sales efficiency, streamline customer servicing, and drive data-driven decisions.</p>
          </div>
          
          <div className="info-card">
            <div className="card-title">Our Philosophy</div>
            <p className="text-gray-700">True digital transformation extends beyond mere automation; it involves creating intelligent, autonomous agent teams that amplify human capabilities. This collaborative intelligence creates a force multiplier effect, enabling you to achieve significantly greater outcomes with existing resources.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
