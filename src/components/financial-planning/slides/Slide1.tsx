import React from 'react';
import '../styles/SlideStyles.css';

/**
 * Slide1 component - Introduction slide
 * 
 * First slide in the financial planning presentation
 * Introduces the financial planning concept and sets expectations
 * 
 * @returns {JSX.Element} The rendered Slide1 component
 */
const Slide1: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="slide-title">Financial Planning Reimagined</h1>
      <h2 className="slide-subtitle mb-6">A Strategic Approach to Your Financial Future</h2>
      
      <div className="slide-text max-w-2xl mx-auto">
        <p className="mb-4">
          Welcome to our interactive financial planning experience. This presentation will guide you through 
          the key aspects of building a solid financial foundation and planning for your future.
        </p>
        <p>
          Use the navigation controls below to move through the presentation at your own pace,
          or use the left and right arrow keys on your keyboard.
        </p>
      </div>
      
      <div className="mt-8 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
