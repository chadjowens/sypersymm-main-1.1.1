import React from 'react';
import FractalBackground from '../components/FractalBackground';
import '../styles/SlideStyles.css';

/**
 * Slide7 component - Sales
 * 
 * Seventh slide in the financial planning presentation
 * Displays the sales pillar with a timeline of components
 * 
 * @returns {JSX.Element} The rendered Slide7 component
 */
const Slide7: React.FC = () => {
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
        <div className="mt-12 mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">02 | Sales</h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-4 text-gray-800">AI-powered sales acceleration through an intelligent, optimized pipeline:</p>
        </div>
        
        {/* Content Area with Timeline */}
        <div className="mb-12">
          <div className="flex justify-between items-start mt-6 relative">
            {/* Timeline connector line */}
            <div className="absolute h-0.5 bg-purple-100 top-7 left-0 right-0 z-0"></div>
            
            {/* Lead Generation - Using Material Symbols */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div className="enhanced-icon-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', backgroundColor: '#f3f4f6', borderRadius: '50%' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '24px', color: '#6b21a8' }}>
                  browse_activity
                </span>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Lead Generation Systems</h3>
                <p className="content-box-text">Automated lead scraping, qualification, and prioritization from multiple sources.</p>
              </div>
            </div>
            
            {/* Outbound Campaigns */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div className="enhanced-icon-container">
                <svg className="enhanced-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                </svg>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Outbound Email Campaigns</h3>
                <p className="content-box-text">Personalized outreach optimized for conversion based on prospect's market position.</p>
              </div>
            </div>
            
            {/* Lead Scoring */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div className="enhanced-icon-container">
                <svg className="enhanced-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"></path>
                </svg>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Lead Scoring &amp; Pipeline</h3>
                <p className="content-box-text">Intelligent scoring and auto-responders for timely follow-ups and lead nurturing.</p>
              </div>
            </div>
            
            {/* Call Analysis */}
            <div className="flex-1 px-2 relative z-10 flex flex-col items-center">
              <div className="enhanced-icon-container">
                <svg className="enhanced-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"></path>
                </svg>
              </div>
              <div className="content-box">
                <h3 className="content-box-header">Call Transcript Analysis</h3>
                <p className="content-box-text">Virtual assistants that transcribe calls, analyze content, and identify next steps.</p>
              </div>
            </div>
          </div>
          
          <div className="value-container">
            <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path>
            </svg>
            <p className="value-text">Value: Never run out of prospects with AI-powered lead generation and increase close rates with intelligent scoring and follow-up systems.</p>
          </div>
        </div>
      </div>
      
      {/* Footer with logo and page numbering */}
      <div 
        className="absolute bottom-0 w-full py-5 px-10 flex justify-between items-center border-t border-gray-200 z-20" 
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      >
        <div className="slide-footer-logo relative inline-block">
          SUPER{'{SYMMETRY}'}
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-4">Confidential</span>
          <span className="text-sm text-gray-500">7</span>
        </div>
      </div>
    </div>
  );
};

export default Slide7;
