import React from 'react';
import '../styles/SlideStyles.css';

/**
 * Slide2 component - Financial Planning Pillars
 * 
 * Second slide in the financial planning presentation
 * Outlines the key pillars of financial planning
 * 
 * @returns {JSX.Element} The rendered Slide2 component
 */
const Slide2: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <h1 className="slide-title">The Five Pillars of Financial Planning</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Cash Flow Management</h3>
          <p className="text-gray-600 dark:text-gray-300">Understanding and optimizing your income, expenses, and savings patterns.</p>
        </div>
        
        <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Investment Strategy</h3>
          <p className="text-gray-600 dark:text-gray-300">Building and managing a portfolio aligned with your goals and risk tolerance.</p>
        </div>
        
        <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Risk Management</h3>
          <p className="text-gray-600 dark:text-gray-300">Protecting your assets and income through appropriate insurance and contingency planning.</p>
        </div>
        
        <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Retirement Planning</h3>
          <p className="text-gray-600 dark:text-gray-300">Ensuring financial security during your retirement years through strategic saving and investing.</p>
        </div>
        
        <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Estate Planning</h3>
          <p className="text-gray-600 dark:text-gray-300">Planning for the efficient transfer of assets to your heirs and minimizing tax implications.</p>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
