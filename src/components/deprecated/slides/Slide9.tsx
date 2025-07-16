import React, { useEffect, useRef } from 'react';
import { Lightbulb } from 'lucide-react';
import { SlideProps } from './SlideInterface';
import './SlideStyles.css';

/**
 * Slide 9: Analytics & Optimization - Fourth pillar of the engagement approach
 * 
 * @param {SlideProps} props - Component props
 * @returns {JSX.Element} The rendered Slide9 component
 */
const Slide9: React.FC<SlideProps> = ({ businessName = 'YourCompany' }) => {
  const performanceChartRef = useRef<HTMLCanvasElement>(null);
  const channelChartRef = useRef<HTMLCanvasElement>(null);
  const goalGaugeRef = useRef<HTMLCanvasElement>(null);

  // This would typically use a charting library like Chart.js
  // For this component, we're just providing the structure
  useEffect(() => {
    // Chart initialization would go here
    // Example: if (performanceChartRef.current) { new Chart(performanceChartRef.current, {...}) }
  }, []);

  return (
    <div>
      <div className="content px-16">
        {/* Title Section with good spacing from top */}
        <div className="mt-16 mb-4">
          <h1 className="title text-4xl" style={{fontSize: '36px', fontWeight: 'normal', color: '#1a202c', textAlign: 'start'}}>04 | Analytics &amp; Optimization</h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-base mt-3">Continuous innovation and optimization ensuring your digital infrastructure remains at the forefront.</p>
        </div>
        
        {/* Content Area */}
        <div className="mb-2">
          {/* KPI Cards Row */}
          <div className="grid grid-cols-4 gap-2 mb-2">
            <div className="kpi-card" style={{padding: '6px', borderRadius: '8px', backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', height: '100%'}}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">CUSTOMER ACQUISITION</p>
                  <p className="kpi-value" style={{fontSize: '20px', fontWeight: 600, color: '#8A2BE2'}}>+42%</p>
                </div>
                <div className="text-purple-500 bg-purple-100 p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <line x1="19" y1="8" x2="19" y2="14"></line>
                    <line x1="22" y1="11" x2="16" y2="11"></line>
                  </svg>
                </div>
              </div>
              <div className="text-xs text-green-600 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1">
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
                12% vs. previous
              </div>
            </div>
            
            <div className="kpi-card" style={{padding: '6px', borderRadius: '8px', backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', height: '100%'}}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">CONVERSION RATE</p>
                  <p className="kpi-value" style={{fontSize: '20px', fontWeight: 600, color: '#8A2BE2'}}>3.8%</p>
                </div>
                <div className="text-purple-500 bg-purple-100 p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="20" x2="12" y2="10"></line>
                    <line x1="18" y1="20" x2="18" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="16"></line>
                  </svg>
                </div>
              </div>
              <div className="text-xs text-green-600 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1">
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
                0.5% vs. previous
              </div>
            </div>
            
            <div className="kpi-card" style={{padding: '6px', borderRadius: '8px', backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', height: '100%'}}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">RESPONSE TIME</p>
                  <p className="kpi-value" style={{fontSize: '20px', fontWeight: 600, color: '#8A2BE2'}}>0.8s</p>
                </div>
                <div className="text-purple-500 bg-purple-100 p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
              </div>
              <div className="text-xs text-green-600 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
                32% vs. previous
              </div>
            </div>
            
            <div className="kpi-card" style={{padding: '6px', borderRadius: '8px', backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', height: '100%'}}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">ROI</p>
                  <p className="kpi-value" style={{fontSize: '20px', fontWeight: 600, color: '#8A2BE2'}}>285%</p>
                </div>
                <div className="text-purple-500 bg-purple-100 p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
              </div>
              <div className="text-xs text-green-600 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1">
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
                15% vs. previous
              </div>
            </div>
          </div>
          
          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            {/* Line Chart */}
            <div className="dashboard-container" style={{borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', padding: '6px', marginBottom: '6px'}}>
              <div className="dashboard-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px'}}>
                <p className="dashboard-title" style={{fontWeight: 600, fontSize: '12px', color: '#4B5563'}}>PERFORMANCE TRENDS</p>
                <div className="text-xs text-gray-500">Last 6 Months</div>
              </div>
              <div className="chart-container" style={{position: 'relative', height: '85px', width: '100%'}}>
                <canvas ref={performanceChartRef} width="560" height="85"></canvas>
              </div>
            </div>
            
            {/* Bar Chart */}
            <div className="dashboard-container" style={{borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', padding: '6px', marginBottom: '6px'}}>
              <div className="dashboard-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px'}}>
                <p className="dashboard-title" style={{fontWeight: 600, fontSize: '12px', color: '#4B5563'}}>CHANNEL PERFORMANCE</p>
                <div className="text-xs text-gray-500">By Source</div>
              </div>
              <div className="chart-container" style={{position: 'relative', height: '85px', width: '100%'}}>
                <canvas ref={channelChartRef} width="560" height="85"></canvas>
              </div>
            </div>
          </div>
          
          {/* Bottom Row */}
          <div className="grid grid-cols-3 gap-2">
            {/* Gauge Chart */}
            <div className="dashboard-container" style={{borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', padding: '6px', marginBottom: '6px'}}>
              <div className="dashboard-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px'}}>
                <p className="dashboard-title" style={{fontWeight: 600, fontSize: '12px', color: '#4B5563'}}>GOAL COMPLETION</p>
              </div>
              <div className="gauge-container" style={{position: 'relative', height: '85px', width: '100%'}}>
                <canvas ref={goalGaugeRef} width="366" height="85"></canvas>
              </div>
              <div className="text-center text-xs text-gray-600 mt-1">75% of quarterly targets met</div>
            </div>
            
            {/* Small Metrics */}
            <div className="dashboard-container" style={{borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', padding: '6px', marginBottom: '6px'}}>
              <div className="dashboard-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px'}}>
                <p className="dashboard-title" style={{fontWeight: 600, fontSize: '12px', color: '#4B5563'}}>SYSTEM OPTIMIZATION</p>
              </div>
              <div className="p-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">Speed Optimization</span>
                  <span className="text-xs font-medium">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-purple-600 h-1.5 rounded-full" style={{width: '92%'}}></div>
                </div>
                
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">SEO Score</span>
                  <span className="text-xs font-medium">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-purple-600 h-1.5 rounded-full" style={{width: '87%'}}></div>
                </div>
                
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">User Experience</span>
                  <span className="text-xs font-medium">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-purple-600 h-1.5 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
            </div>
            
            {/* Data Table */}
            <div className="dashboard-container" style={{borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', padding: '6px', marginBottom: '6px'}}>
              <div className="dashboard-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px'}}>
                <p className="dashboard-title" style={{fontWeight: 600, fontSize: '12px', color: '#4B5563'}}>TOP CONTENT PERFORMANCE</p>
              </div>
              <table className="data-table" style={{borderCollapse: 'collapse', width: '100%'}}>
                <thead>
                  <tr>
                    <th style={{border: '1px solid #E5E7EB', padding: '2px 4px', fontSize: '10px', backgroundColor: '#F3F4F6'}}>Content</th>
                    <th style={{border: '1px solid #E5E7EB', padding: '2px 4px', fontSize: '10px', backgroundColor: '#F3F4F6'}}>Views</th>
                    <th style={{border: '1px solid #E5E7EB', padding: '2px 4px', fontSize: '10px', backgroundColor: '#F3F4F6'}}>Conv.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{border: '1px solid #E5E7EB', padding: '2px 4px', fontSize: '10px'}}>AI Guide</td>
                    <td style={{border: '1px solid #E5E7EB', padding: '2px 4px', fontSize: '10px'}}>8,452</td>
                    <td style={{border: '1px solid #E5E7EB', padding: '2px 4px', fontSize: '10px'}}>4.2%</td>
                  </tr>
                  <tr>
                    <td style={{border: '1px solid #E5E7EB', padding: '2px 4px', fontSize: '10px'}}>Case Study</td>
                    <td style={{border: '1px solid #E5E7EB', padding: '2px 4px', fontSize: '10px'}}>6,731</td>
                    <td style={{border: '1px solid #E5E7EB', padding: '2px 4px', fontSize: '10px'}}>3.8%</td>
                  </tr>
                  <tr>
                    <td style={{border: '1px solid #E5E7EB', padding: '2px 4px', fontSize: '10px'}}>Webinar</td>
                    <td style={{border: '1px solid #E5E7EB', padding: '2px 4px', fontSize: '10px'}}>5,128</td>
                    <td style={{border: '1px solid #E5E7EB', padding: '2px 4px', fontSize: '10px'}}>5.1%</td>
                  </tr>
                  <tr>
                    <td style={{border: '1px solid #E5E7EB', padding: '2px 4px', fontSize: '10px'}}>Blog Post</td>
                    <td style={{border: '1px solid #E5E7EB', padding: '2px 4px', fontSize: '10px'}}>4,390</td>
                    <td style={{border: '1px solid #E5E7EB', padding: '2px 4px', fontSize: '10px'}}>2.3%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Value Section */}
          <div className="flex justify-center mt-4">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex items-center">
              <Lightbulb className="text-yellow-500 mr-2" size={20} />
              <p className="font-semibold text-gray-800">
                Value for <span className="business-name">{businessName}</span>: Make data-driven decisions with real-time insights while ensuring your competitive advantage grows stronger every month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide9;
