import React from 'react';
import '../styles/SlideStyles.css';

/**
 * Slide9 component - Analytics & Optimization
 * 
 * Ninth slide in the financial planning presentation
 * Displays analytics dashboard with KPIs, charts, and metrics
 * 
 * @returns {JSX.Element} The rendered Slide9 component
 */
const Slide9: React.FC = () => {
  
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
      <svg className="absolute top-0 left-0 w-full h-full opacity-15 z-0" xmlns="http://www.w3.org/2000/svg">
        <pattern id="fractal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 50 L25 25 L50 50 L75 25 L100 50 L75 75 L50 50 L25 75 Z" fill="none" stroke="#8A2BE2" strokeWidth="0.5" opacity="0.6"></path>
          <path d="M0 0 L50 50 L0 100 M100 0 L50 50 L100 100" fill="none" stroke="#5D3FD3" strokeWidth="0.3" opacity="0.4"></path>
          <path d="M25 0 L25 100 M75 0 L75 100 M0 25 L100 25 M0 75 L100 75" fill="none" stroke="#C9A0DC" strokeWidth="0.2" opacity="0.3"></path>
        </pattern>
        <rect width="100%" height="100%" fill="url(#fractal-pattern)"></rect>
      </svg>
      
      <div className="relative z-10 px-16 h-full flex flex-col" style={{ backgroundColor: 'transparent' }}>
        {/* Title Section with good spacing from top */}
        <div className="mt-16 mb-4">
          <h1 className="text-4xl font-normal text-gray-900">04 | Analytics &amp; Optimization</h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-3 text-gray-700">Continuous innovation and optimization ensuring your digital infrastructure remains at the forefront.</p>
        </div>
        
        {/* Content Area */}
        <div className="mb-2">
          {/* KPI Cards Row */}
          <div className="grid grid-cols-4 gap-2 mb-2">
            <div className="kpi-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">CUSTOMER ACQUISITION</p>
                  <p className="text-xl font-semibold text-purple-600">+42%</p>
                </div>
                <div className="text-purple-500 bg-purple-100 p-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                  </svg>
                </div>
              </div>
              <div className="text-xs text-green-600 mt-1">
                <svg className="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                12% vs. previous
              </div>
            </div>
            
            <div className="kpi-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">CONVERSION RATE</p>
                  <p className="text-xl font-semibold text-purple-600">3.8%</p>
                </div>
                <div className="text-purple-500 bg-purple-100 p-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2h10a1 1 0 100-2H3zm0 4a1 1 0 000 2h6a1 1 0 100-2H3zm0 4a1 1 0 100 2h12a1 1 0 100-2H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="text-xs text-green-600 mt-1">
                <svg className="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                0.5% vs. previous
              </div>
            </div>
            
            <div className="kpi-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">RESPONSE TIME</p>
                  <p className="text-xl font-semibold text-purple-600">0.8s</p>
                </div>
                <div className="text-purple-500 bg-purple-100 p-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="text-xs text-green-600 mt-1">
                <svg className="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                32% vs. previous
              </div>
            </div>
            
            <div className="kpi-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">ROI</p>
                  <p className="text-xl font-semibold text-purple-600">285%</p>
                </div>
                <div className="text-purple-500 bg-purple-100 p-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="text-xs text-green-600 mt-1">
                <svg className="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                15% vs. previous
              </div>
            </div>
          </div>
          
          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            {/* Line Chart */}
            <div className="bg-white rounded-lg shadow-sm p-2">
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs font-semibold text-gray-600">PERFORMANCE TRENDS</p>
                <div className="text-xs text-gray-500">Last 6 Months</div>
              </div>
              <div className="h-24 flex items-center justify-center">
                <div className="w-full px-4">
                  <div className="relative h-16">
                    {/* Static line chart representation */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200"></div>
                    <div className="absolute bottom-0 left-0 w-full flex justify-between">
                      <div className="text-xs text-gray-500">Jan</div>
                      <div className="text-xs text-gray-500">Feb</div>
                      <div className="text-xs text-gray-500">Mar</div>
                      <div className="text-xs text-gray-500">Apr</div>
                      <div className="text-xs text-gray-500">May</div>
                      <div className="text-xs text-gray-500">Jun</div>
                    </div>
                    {/* Purple line */}
                    <svg className="absolute bottom-0.5 left-0 w-full h-12" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path d="M0,35 L20,30 L40,20 L60,15 L80,8 L100,2" fill="none" stroke="#8A2BE2" strokeWidth="2"></path>
                      <path d="M0,35 L20,30 L40,20 L60,15 L80,8 L100,2 L100,40 L0,40 Z" fill="rgba(138, 43, 226, 0.1)"></path>
                    </svg>
                    {/* Light purple line */}
                    <svg className="absolute bottom-0.5 left-0 w-full h-12" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path d="M0,35 L20,33 L40,30 L60,28 L80,25 L100,23" fill="none" stroke="#C9A0DC" strokeWidth="2"></path>
                      <path d="M0,35 L20,33 L40,30 L60,28 L80,25 L100,23 L100,40 L0,40 Z" fill="rgba(201, 160, 220, 0.1)"></path>
                    </svg>
                  </div>
                  <div className="flex justify-center mt-2">
                    <div className="flex items-center mr-4">
                      <div className="w-2 h-2 bg-purple-600 mr-1"></div>
                      <span className="text-xs">With Analytics</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-300 mr-1"></div>
                      <span className="text-xs">Without Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bar Chart */}
            <div className="bg-white rounded-lg shadow-sm p-2">
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs font-semibold text-gray-600">CHANNEL PERFORMANCE</p>
                <div className="text-xs text-gray-500">By Source</div>
              </div>
              <div className="h-24 flex items-end justify-between px-4 pt-2">
                {/* Static bar chart representation */}
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-purple-600 rounded-t" style={{ height: '32px' }}></div>
                  <div className="text-xs mt-1">Organic</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-purple-500 rounded-t" style={{ height: '45px' }}></div>
                  <div className="text-xs mt-1">Social</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-purple-400 rounded-t" style={{ height: '38px' }}></div>
                  <div className="text-xs mt-1">Email</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-purple-300 rounded-t" style={{ height: '24px' }}></div>
                  <div className="text-xs mt-1">Paid</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-purple-200 rounded-t" style={{ height: '18px' }}></div>
                  <div className="text-xs mt-1">Direct</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Row */}
          <div className="grid grid-cols-3 gap-2">
            {/* Gauge Chart */}
            <div className="bg-white rounded-lg shadow-sm p-2">
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs font-semibold text-gray-600">GOAL COMPLETION</p>
              </div>
              <div className="h-24 flex items-center justify-center">
                {/* Static gauge chart representation */}
                <div className="relative w-20 h-20">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#F3E8FF"
                      strokeWidth="3"
                      strokeDasharray="100, 100"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#8A2BE2"
                      strokeWidth="3"
                      strokeDasharray="75, 100"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-xl font-bold text-purple-600">75%</div>
                    <div className="text-xs text-gray-500">Complete</div>
                  </div>
                </div>
              </div>
              <div className="text-center text-xs text-gray-600 mt-1">75% of quarterly targets met</div>
            </div>
            
            {/* Small Metrics */}
            <div className="bg-white rounded-lg shadow-sm p-2">
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs font-semibold text-gray-600">SYSTEM OPTIMIZATION</p>
              </div>
              <div className="p-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">Speed Optimization</span>
                  <span className="text-xs font-medium">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
                
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">SEO Score</span>
                  <span className="text-xs font-medium">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: '87%' }}></div>
                </div>
                
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">User Experience</span>
                  <span className="text-xs font-medium">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Data Table */}
            <div className="bg-white rounded-lg shadow-sm p-2">
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs font-semibold text-gray-600">TOP CONTENT PERFORMANCE</p>
              </div>
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-1 text-left">Content</th>
                    <th className="p-1 text-right">Views</th>
                    <th className="p-1 text-right">Conv.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-1">AI Guide</td>
                    <td className="p-1 text-right">8,452</td>
                    <td className="p-1 text-right">4.2%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-1">Case Study</td>
                    <td className="p-1 text-right">6,731</td>
                    <td className="p-1 text-right">3.8%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-1">Webinar</td>
                    <td className="p-1 text-right">5,128</td>
                    <td className="p-1 text-right">5.1%</td>
                  </tr>
                  <tr>
                    <td className="p-1">Blog Post</td>
                    <td className="p-1 text-right">4,390</td>
                    <td className="p-1 text-right">2.3%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Value Section */}
          <div className="flex justify-center mt-4">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex items-center">
              <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
              </svg>
              <p className="font-semibold text-gray-800">
                Value: Make data-driven decisions with real-time insights while ensuring your competitive advantage grows stronger every month.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with logo and page numbering */}
      <div 
        className="absolute bottom-0 w-full py-5 px-10 flex justify-between items-center border-t border-gray-200 z-20" 
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      >
        <div className="font-extrabold text-xl uppercase tracking-wider bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent relative inline-block">
          SUPER{'{SYMMETRY}'}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"></span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-4">Confidential</span>
          <span className="text-sm text-gray-500">9</span>
        </div>
      </div>
    </div>
  );
};

export default Slide9;
