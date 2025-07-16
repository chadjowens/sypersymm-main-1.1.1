import React from 'react';
import '../styles/SlideStyles.css';

/**
 * Slide3 component - Our Approach
 * 
 * Third slide in the financial planning presentation
 * Outlines the company's approach to financial planning
 * 
 * @returns {JSX.Element} The rendered Slide3 component
 */
const Slide3: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <h1 className="slide-title">Our Financial Planning Approach</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col">
          <h2 className="slide-subtitle">How We Work With You</h2>
          
          <div className="space-y-4 mt-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                <span className="text-purple-600 dark:text-purple-300 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Discovery</h3>
                <p className="text-gray-600 dark:text-gray-300">We begin by understanding your current financial situation, goals, and concerns.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                <span className="text-purple-600 dark:text-purple-300 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300">We analyze your financial data and identify opportunities and potential risks.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                <span className="text-purple-600 dark:text-purple-300 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Strategy Development</h3>
                <p className="text-gray-600 dark:text-gray-300">We create a customized financial plan tailored to your specific needs and goals.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                <span className="text-purple-600 dark:text-purple-300 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Implementation</h3>
                <p className="text-gray-600 dark:text-gray-300">We help you put your financial plan into action with clear, actionable steps.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                <span className="text-purple-600 dark:text-purple-300 font-bold">5</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Monitoring & Adjustment</h3>
                <p className="text-gray-600 dark:text-gray-300">We regularly review your plan and make adjustments as your life and goals evolve.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <h2 className="slide-subtitle">What Makes Us Different</h2>
          
          <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm mt-4">
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-purple-600 dark:text-purple-300 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Holistic approach that considers all aspects of your financial life</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-purple-600 dark:text-purple-300 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Personalized strategies tailored to your unique situation</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-purple-600 dark:text-purple-300 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Transparent fee structure with no hidden costs</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-purple-600 dark:text-purple-300 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Advanced technology combined with human expertise</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-purple-600 dark:text-purple-300 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Continuous education and resources to empower your financial decisions</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-6 bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg border-l-4 border-purple-600">
            <p className="text-purple-800 dark:text-purple-200 italic">
              "Our mission is to help you achieve financial clarity, security, and freedom through personalized planning and ongoing support."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
