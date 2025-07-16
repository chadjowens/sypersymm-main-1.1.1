import React from 'react';
import { SlideProps } from './SlideInterface';
import './SlideStyles.css';

/**
 * Slide 3: Implications for the business
 * 
 * @param {SlideProps} props - Component props
 * @returns {JSX.Element} The rendered Slide3 component
 */
const Slide3: React.FC<SlideProps> = ({ businessName }) => {
  return (
    <div>
      {/* Title Section with good spacing from top */}
      <div className="mt-16 mb-8">
        <h1 className="gradient-header">Implications for <span className="business-name">{businessName}</span></h1>
        <div className="w-24 h-1 bg-purple-600 mt-3"></div>
        <p className="text-lg mt-4">What these AI transformation trends mean for your organization:</p>
      </div>
      
      {/* Content Area */}
      <div className="mb-8">
        <div className="space-y-4">
          <div className="info-card">
            <h2 className="font-semibold text-xl mb-2 text-gray-800">Competitive Pressure</h2>
            <p className="text-gray-700">The rapid adoption of AI solutions is creating a widening gap between digital leaders and laggards. Organizations that delay transformation risk falling permanently behind as competitors leverage AI for efficiency and growth.</p>
          </div>
          
          <div className="info-card">
            <h2 className="font-semibold text-xl mb-2 text-gray-800">Growth Opportunity</h2>
            <p className="text-gray-700">Strategic AI implementation offers exponential growth potential through enhanced operational efficiency, accelerated sales cycles, and improved customer experiences—driving both top and bottom line results.</p>
          </div>
          
          <div className="info-card">
            <h2 className="font-semibold text-xl mb-2 text-gray-800">Talent Implications</h2>
            <p className="text-gray-700">AI transformation requires reskilling existing teams and potentially acquiring new talent with specialized expertise. Organizations must develop a talent strategy that balances AI implementation with human workforce development.</p>
          </div>
          
          <div className="info-card">
            <h2 className="font-semibold text-xl mb-2 text-gray-800">Implementation Challenges</h2>
            <p className="text-gray-700">Successful AI transformation requires overcoming technical, organizational, and cultural barriers. Most organizations lack the internal expertise to navigate these challenges efficiently.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
