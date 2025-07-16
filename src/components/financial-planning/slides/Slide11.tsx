import React from 'react';
import '../styles/SlideStyles.css';

/**
 * Slide11 - Engagement Model
 * 
 * Displays the engagement model with pricing table and service information
 * Includes setup fees, monthly costs, and performance metrics
 * 
 * @returns {JSX.Element} The rendered Slide11 component
 */
const Slide11: React.FC = () => {
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
      {/* Fractal Pattern Background - on top of white background */}
      <svg className="fractal-background" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style={{ backgroundColor: '#ffffff', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        <pattern id="fractal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 50 L25 25 L50 50 L75 25 L100 50 L75 75 L50 50 L25 75 Z" fill="none" stroke="#8A2BE2" strokeWidth="0.5" opacity="0.6"></path>
          <path d="M0 0 L50 50 L0 100 M100 0 L50 50 L100 100" fill="none" stroke="#5D3FD3" strokeWidth="0.3" opacity="0.4"></path>
          <path d="M25 0 L25 100 M75 0 L75 100 M0 25 L100 25 M0 75 L100 75" fill="none" stroke="#C9A0DC" strokeWidth="0.2" opacity="0.3"></path>
        </pattern>
        <rect width="100%" height="100%" fill="url(#fractal-pattern)"></rect>
      </svg>
      
      <div className="relative z-10 px-16 h-full flex flex-col" style={{ backgroundColor: '#ffffff' }}>

        {/* Title Section with good spacing from top */}
        <div className="mt-12 mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">
            Engagement Model
          </h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-4 text-gray-800">
            12-month partnership with structured financial terms designed to deliver continuous value.
          </p>
        </div>
        
        {/* Content Area */}
        <div className="mb-8">
          {/* Pricing Table */}
          <div className="overflow-hidden">
            <table className="price-table text-sm" style={{ borderCollapse: 'separate', borderSpacing: 0, overflow: 'hidden', borderRadius: '8px' }}>
              <thead>
                <tr>
                  <th className="w-1/5" style={{ backgroundColor: 'rgba(138, 43, 226, 0.15)', fontWeight: 600, textAlign: 'left', padding: '10px 16px', color: '#4A5568' }}>Offering</th>
                  <th className="w-1/5" style={{ backgroundColor: 'rgba(138, 43, 226, 0.15)', fontWeight: 600, textAlign: 'left', padding: '10px 16px', color: '#4A5568' }}>Setup Fee</th>
                  <th className="w-1/5" style={{ backgroundColor: 'rgba(138, 43, 226, 0.15)', fontWeight: 600, textAlign: 'left', padding: '10px 16px', color: '#4A5568' }}>Monthly</th>
                  <th className="w-1/5" style={{ backgroundColor: 'rgba(138, 43, 226, 0.15)', fontWeight: 600, textAlign: 'left', padding: '10px 16px', color: '#4A5568' }}>Automations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="highlight-cell" style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', fontWeight: 600, color: '#4A5568' }}>Foundation</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>$2,000</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>$1,000</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>3-5</td>
                </tr>
                <tr>
                  <td className="highlight-cell" style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', fontWeight: 600, color: '#4A5568' }}>Sales</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>$2,500</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>$1,500</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>7-10</td>
                </tr>
                <tr>
                  <td className="highlight-cell" style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', fontWeight: 600, color: '#4A5568' }}>Servicing</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>$2,000</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>$1,000</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>3-5</td>
                </tr>
                <tr>
                  <td className="highlight-cell" style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', fontWeight: 600, color: '#4A5568' }}>Analytics</td>
                  <td colSpan={3} style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>Included with selected related offering</td>
                </tr>
                <tr>
                  <td className="highlight-cell" style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', fontWeight: 600, color: '#4A5568' }}>Future Enhancement</td>
                  <td colSpan={3} style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>TBD based on strategic roadmapping sessions</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Additional Info in 3-column layout with card styling */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="info-card">
              <h3 className="text-sm font-semibold mb-2" style={{ fontSize: '16px', fontWeight: 'bold', color: 'rgb(138, 43, 226)' }}>
                Service Guarantee
              </h3>
              <p className="text-xs text-gray-700" style={{ fontSize: '14px', color: 'rgb(55, 65, 81)' }}>
                Technical deliverables completed on time or 15% fee reduction, plus measurable business improvement within 6 months or 3 months free.
              </p>
            </div>
            
            <div className="info-card">
              <h3 className="text-sm font-semibold mb-2" style={{ fontSize: '16px', fontWeight: 'bold', color: 'rgb(138, 43, 226)' }}>
                Performance Metrics
              </h3>
              <ul className="list-disc pl-4 text-xs text-gray-700">
                <li style={{ fontSize: '14px', color: 'rgb(55, 65, 81)' }}>Increase in qualified leads</li>
                <li style={{ fontSize: '14px', color: 'rgb(55, 65, 81)' }}>Reduced service response times</li>
                <li style={{ fontSize: '14px', color: 'rgb(55, 65, 81)' }}>Improved website conversion</li>
                <li style={{ fontSize: '14px', color: 'rgb(55, 65, 81)' }}>Social media engagement growth</li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3 className="text-sm font-semibold mb-2" style={{ fontSize: '16px', fontWeight: 'bold', color: 'rgb(138, 43, 226)' }}>
                Performance Bonuses
              </h3>
              <ul className="list-disc pl-4 text-xs text-gray-700">
                <li style={{ fontSize: '14px', color: 'rgb(55, 65, 81)' }}>Bonus per lead-to-meeting conversion</li>
                <li style={{ fontSize: '14px', color: 'rgb(55, 65, 81)' }}>% of revenue increase from website</li>
                <li style={{ fontSize: '14px', color: 'rgb(55, 65, 81)' }}>% of documented operational savings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with logo and page numbering */}
      <div 
        className="absolute bottom-0 w-full py-5 px-10 flex justify-between items-center border-t border-gray-200 z-20" 
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="font-extrabold text-xl uppercase tracking-wider bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent relative inline-block">
          SUPER{'{SYMMETRY}'}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"></span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-4">Confidential</span>
          <span className="text-sm text-gray-500">11</span>
        </div>
      </div>
    </div>
  );
};

export default Slide11;
