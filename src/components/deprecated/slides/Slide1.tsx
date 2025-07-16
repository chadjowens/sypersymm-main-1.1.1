import React from 'react';
import { SlideProps } from './SlideInterface';
import './SlideStyles.css';

// Debug log to verify this module is being imported
console.log('Slide1 module loaded');

/**
 * Slide 1: Title slide for the presentation
 * 
 * @param {SlideProps} props - Component props
 * @returns {JSX.Element} The rendered Slide1 component
 */
const Slide1: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <h1 className="title gradient-title">Digital Transformation, Growth &amp; Agentic Automation Partnership</h1>
      <h2 className="subtitle">Comprehensive 12-Month Digital Transformation Strategy</h2>
      <p className="text-lg text-gray-600 mt-12">Prepared by: Supersymmetry</p>
    </div>
  );
};

export default Slide1;
