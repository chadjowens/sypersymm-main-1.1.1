import React from 'react';
import { SlideProps } from './SlideInterface';
import './SlideStyles.css';

/**
 * Slide 2: AI Transformation Imperative with key statistics
 * 
 * @param {SlideProps} props - Component props
 * @returns {JSX.Element} The rendered Slide2 component
 */
const Slide2: React.FC<SlideProps> = () => {
  return (
    <div>
      {/* Title Section with good spacing from top */}
      <div className="mt-16 mb-8">
        <h1 className="gradient-header">The AI Transformation Imperative</h1>
        <div className="w-24 h-1 bg-purple-600 mt-3"></div>
        <p className="text-lg mt-4">The business landscape is undergoing a seismic shift powered by AI. Key statistics reveal the urgency of adoption:</p>
      </div>
      
      {/* Content Area */}
      <div className="mb-8">
        <div className="stat-grid">
          <div className="stat-card">
            <span className="stat-number">$4.4 trillion</span>
            <p className="text-gray-700">Long-term AI productivity potential (McKinsey)</p>
          </div>
          
          <div className="stat-card">
            <span className="stat-number">4× growth</span>
            <p className="text-gray-700">Productivity nearly quadrupled in AI-exposed industries since 2022</p>
          </div>
          
          <div className="stat-card">
            <span className="stat-number">56%</span>
            <p className="text-gray-700">Wage premium for jobs requiring AI skills</p>
          </div>
          
          <div className="stat-card">
            <span className="stat-number">80%</span>
            <p className="text-gray-700">Productivity improvement reported by workers using AI tools</p>
          </div>
        </div>
        
        <div className="mt-6 text-lg">
          <p className="font-semibold text-gray-800">3 out of 5 business owners predict AI will drive sales growth</p>
          <p className="mt-3 text-gray-800 font-semibold italic">The message is clear for <span className="business-name">businesses today</span>: AI adoption is no longer optional—it's a competitive imperative.</p>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
