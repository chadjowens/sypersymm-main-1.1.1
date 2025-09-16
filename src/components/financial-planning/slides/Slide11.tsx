import React, { useState, useEffect } from 'react';
import FractalBackground from '../components/FractalBackground';
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
  // Animation visibility state
  const [isVisible, setIsVisible] = useState(false);
  
  // Set visibility after component mounts for animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
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
        <div 
          className="mt-12 mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.98)',
            transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out'
          }}
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">
            Sample Engagement Model
          </h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-4 text-gray-800">
            12-month partnership with structured financial terms designed to deliver continuous value.
          </p>
        </div>
        
        {/* Content Area */}
        <div className="mb-8">
          {/* Pricing Table */}
          <div 
            className="overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.98)',
              transition: 'opacity 0.7s ease-in-out 0.4s, transform 0.7s ease-in-out 0.4s'
            }}
          >
            <table className="price-table text-sm" style={{ borderCollapse: 'separate', borderSpacing: 0, overflow: 'hidden', borderRadius: '0' }}>
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
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>$2,500</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>$1,500</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>3-5</td>
                </tr>
                <tr>
                  <td className="highlight-cell" style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', fontWeight: 600, color: '#4A5568' }}>Sales</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>$2,500</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>$2,500</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>7-10</td>
                </tr>
                <tr>
                  <td className="highlight-cell" style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', fontWeight: 600, color: '#4A5568' }}>Servicing</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>$2,500</td>
                  <td style={{ padding: '8px 16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)', backgroundColor: 'rgba(255, 255, 255, 0.6)', color: '#4A5568' }}>$1,500</td>
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
            <div 
              className="info-card" 
              style={{ 
                borderRadius: '0',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 0.8s, transform 0.7s ease-in-out 0.8s'
              }}
            >
              <h3 className="text-sm font-semibold mb-2" style={{ fontSize: '16px', fontWeight: 'bold', color: 'rgb(138, 43, 226)' }}>
                Service Guarantee
              </h3>
              <p className="text-xs text-gray-700" style={{ fontSize: '14px', color: 'rgb(55, 65, 81)' }}>
                Technical deliverables completed on time or 15% fee reduction, plus measurable business improvement within 6 months or 3 months free.
              </p>
            </div>
            
            <div 
              className="info-card" 
              style={{ 
                borderRadius: '0',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 1.0s, transform 0.7s ease-in-out 1.0s'
              }}
            >
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
            
            <div 
              className="info-card" 
              style={{ 
                borderRadius: '0',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.7s ease-in-out 1.2s, transform 0.7s ease-in-out 1.2s'
              }}
            >
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
        className="absolute bottom-0 w-full py-3 px-10 flex justify-between items-center border-t border-gray-200 z-20" 
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="slide-footer-logo relative inline-block">
          SUPER{'{SYMMETRY}'}
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 mr-3">Confidential</span>
          <span className="text-xs text-gray-500">11</span>
        </div>
      </div>
    </div>
  );
};

export default Slide11;
