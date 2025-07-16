import React from 'react';
import '../styles/SlideStyles.css';

/**
 * Slide10 component - Innovation & Education
 * 
 * Tenth slide in the financial planning presentation
 * Displays innovation and education offerings with a mobile dashboard preview
 * 
 * @returns {JSX.Element} The rendered Slide10 component
 */
const Slide10: React.FC = () => {
  return (
    <div 
      className="slide-container"
      style={{
        position: 'relative',
        backgroundColor: '#ffffff',
        overflow: 'hidden'
      }}
    >
      {/* Fractal Pattern Background */}
      <svg className="fractal-background" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <linearGradient id="animated-gradient-slide10" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0077ff">
              <animate attributeName="stop-color" values="#0077ff; #ff69b4; #0077ff" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#ff69b4">
              <animate attributeName="stop-color" values="#ff69b4; #0077ff; #ff69b4" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#0077ff">
              <animate attributeName="stop-color" values="#0077ff; #ff69b4; #0077ff" dur="8s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <pattern id="fractal-pattern-slide10" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 50 L25 25 L50 50 L75 25 L100 50 L75 75 L50 50 L25 75 Z" fill="none" stroke="url(#animated-gradient-slide10)" strokeWidth="0.8" opacity="0.7"></path>
          <path d="M0 0 L50 50 L0 100 M100 0 L50 50 L100 100" fill="none" stroke="url(#animated-gradient-slide10)" strokeWidth="0.6" opacity="0.6"></path>
          <path d="M25 0 L25 100 M75 0 L75 100 M0 25 L100 25 M0 75 L100 75" fill="none" stroke="url(#animated-gradient-slide10)" strokeWidth="0.4" opacity="0.5"></path>
        </pattern>
        <rect width="100%" height="100%" fill="url(#fractal-pattern-slide10)"></rect>
      </svg>
      
      <div className="content px-16">
        {/* Title Section with reduced spacing from top */}
        <div className="mt-12 mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">
            05 | Innovation &amp; Education
          </h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-4 text-gray-800">Stay ahead of the AI curve with our comprehensive innovation and education offerings:</p>
        </div>
        
        {/* Split Layout Content */}
        <div className="flex mb-4">
          {/* Left Side - Innovation & Education with icon treatment */}
          <div className="w-4/5 pr-8">
            <div className="mb-5">
              {/* Innovation & Education Features with reduced spacing */}
              <div className="flex items-start mb-4">
                <div className="circle-icon flex-shrink-0" style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '0',
                  backgroundColor: '#F3E8FF',
                  border: '2px solid #8A2BE2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8A2BE2',
                  position: 'relative'
                }}>
                  <i className="fas fa-chalkboard-teacher fa-lg"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">Ongoing Digital Training</h3>
                  <p className="text-gray-600 mt-1">Regular workshops, personalized training sessions, and digital literacy courses for your team</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="circle-icon flex-shrink-0" style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '0',
                  backgroundColor: '#F3E8FF',
                  border: '2px solid #8A2BE2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8A2BE2',
                  position: 'relative'
                }}>
                  <i className="fas fa-rocket fa-lg"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">Early Access to Next-Gen Tools</h3>
                  <p className="text-gray-600 mt-1">Preview and beta access to emerging AI technologies before market release</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="circle-icon flex-shrink-0" style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '0',
                  backgroundColor: '#F3E8FF',
                  border: '2px solid #8A2BE2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8A2BE2',
                  position: 'relative'
                }}>
                  <i className="fas fa-route fa-lg"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">Strategic Innovation Roadmapping</h3>
                  <p className="text-gray-600 mt-1">Quarterly sessions to align technological advancements with your business objectives</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="circle-icon flex-shrink-0" style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '0',
                  backgroundColor: '#F3E8FF',
                  border: '2px solid #8A2BE2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8A2BE2',
                  position: 'relative'
                }}>
                  <i className="fas fa-lightbulb fa-lg"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">Innovation Culture Development</h3>
                  <p className="text-gray-600 mt-1">Resources and methodologies to foster internal innovation and continuous improvement</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Mobile Screen with Dashboard (no phone frame) */}
          <div className="w-1/4 relative" style={{ position: 'relative' }}>
            {/* Mobile screen is positioned absolutely */}
          </div>
        </div>
        
        {/* Value Section (moved outside to span full width) */}
        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-6 mb-6">
          <p className="font-semibold text-gray-800 flex items-center">
            <i className="fas fa-lightbulb text-yellow-500 mr-3 text-lg"></i>
            <span>Value: Create a future-ready organization that continuously evolves with technological advancements.</span>
          </p>
        </div>
        
        {/* Mobile screen positioned absolutely */}
        <div className="mobile-screen" style={{
          backgroundColor: '#f9fafc',
          height: '420px',
          width: '240px',
          borderRadius: '16px',
          overflow: 'hidden',
          position: 'absolute',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          zIndex: 50,
          right: '80px',
          top: '50%',
          transform: 'translateY(-50%)'
        }}>
          {/* Dashboard Header */}
          <div className="dashboard-header" style={{
            backgroundColor: '#8A2BE2',
            color: 'white',
            padding: '12px 10px'
          }}>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs opacity-80">Welcome back</div>
                <div className="font-semibold">Client Dashboard</div>
              </div>
              <div className="h-8 w-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <i className="fas fa-user-circle"></i>
              </div>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="dashboard-content" style={{
            padding: '8px',
            overflow: 'auto',
            height: 'calc(100% - 48px)'
          }}>
            {/* Portfolio Overview */}
            <div className="dashboard-card" style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '8px',
              marginBottom: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}>
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-semibold text-sm">Portfolio Overview</h4>
                <span className="text-green-500 text-xs font-semibold">+12.4% <i className="fas fa-arrow-up"></i></span>
              </div>
              <div style={{ height: '90px' }}>
                {/* Static line chart representation */}
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 208 90" preserveAspectRatio="none">
                    <path d="M0,70 L35,60 L70,50 L105,55 L140,40 L175,20 L208,10" 
                          fill="none" 
                          stroke="#8A2BE2" 
                          strokeWidth="2" />
                    <path d="M0,70 L35,60 L70,50 L105,55 L140,40 L175,20 L208,10 L208,90 L0,90 Z" 
                          fill="rgba(138, 43, 226, 0.1)" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* AI Insights */}
            <div className="dashboard-card" style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '8px',
              marginBottom: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}>
              <h4 className="font-semibold text-sm mb-1">AI Insights</h4>
              <div className="bg-purple-50 rounded-md p-2 text-xs">
                <div className="flex items-start mb-1">
                  <i className="fas fa-robot text-purple-500 mr-2 mt-0.5"></i>
                  <span>Recommend rebalancing portfolio to increase defensive positions by 5%</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-chart-line text-purple-500 mr-2 mt-0.5"></i>
                  <span>Market volatility predicted to increase in next 30 days</span>
                </div>
              </div>
            </div>
            
            {/* Investment Data */}
            <div className="dashboard-card" style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '8px',
              marginBottom: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}>
              <h4 className="font-semibold text-sm mb-1">Investment Allocation</h4>
              <div className="flex justify-center" style={{ height: '80px' }}>
                {/* Static donut chart representation */}
                <div className="relative w-20 h-20 mt-2">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    {/* Stocks - 45% */}
                    <path d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#8A2BE2"
                      strokeWidth="3"
                      strokeDasharray="45, 100"
                      strokeDashoffset="25"
                    />
                    {/* Bonds - 30% */}
                    <path d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#5D3FD3"
                      strokeWidth="3"
                      strokeDasharray="30, 100"
                      strokeDashoffset="70"
                    />
                    {/* Cash - 15% */}
                    <path d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#C9A0DC"
                      strokeWidth="3"
                      strokeDasharray="15, 100"
                      strokeDashoffset="0"
                    />
                    {/* Alternatives - 10% */}
                    <path d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E6E6FA"
                      strokeWidth="3"
                      strokeDasharray="10, 100"
                      strokeDashoffset="15"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-center text-xs mt-2">
                <div className="flex items-center mx-1">
                  <div className="w-2 h-2 bg-purple-600 mr-1"></div>
                  <span>Stocks</span>
                </div>
                <div className="flex items-center mx-1">
                  <div className="w-2 h-2 bg-purple-500 mr-1"></div>
                  <span>Bonds</span>
                </div>
                <div className="flex items-center mx-1">
                  <div className="w-2 h-2 bg-purple-300 mr-1"></div>
                  <span>Cash</span>
                </div>
                <div className="flex items-center mx-1">
                  <div className="w-2 h-2 bg-purple-100 mr-1"></div>
                  <span>Alt</span>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="dashboard-card mb-0" style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '8px',
              marginBottom: '0',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}>
              <h4 className="font-semibold text-sm mb-1">Quick Actions</h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-100 rounded-md flex flex-col items-center justify-center p-2">
                  <i className="fas fa-sync text-gray-600 mb-1"></i>
                  <span className="text-xs">Rebalance</span>
                </div>
                <div className="bg-gray-100 rounded-md flex flex-col items-center justify-center p-2">
                  <i className="fas fa-dollar-sign text-gray-600 mb-1"></i>
                  <span className="text-xs">Invest</span>
                </div>
                <div className="bg-gray-100 rounded-md flex flex-col items-center justify-center p-2">
                  <i className="fas fa-chart-pie text-gray-600 mb-1"></i>
                  <span className="text-xs">Reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with logo and page numbering */}
      <div className="footer" style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid #e2e8f0',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 20
      }}>
        <div className="slide-footer-logo relative inline-block">
          SUPER{'{SYMMETRY}'}
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-4">Confidential</span>
          <span className="text-sm text-gray-500">10</span>
        </div>
      </div>
    </div>
  );
};

export default Slide10;
