import React, { useEffect, useRef, useState } from 'react';
import FractalBackground from '../components/FractalBackground';
import '../styles/SlideStyles.css';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

/**
 * Slide9 component - Analytics & Optimization
 * 
 * Ninth slide in the financial planning presentation
 * Displays analytics dashboard with KPIs, charts, and metrics
 * 
 * @returns {JSX.Element} The rendered Slide9 component
 */
const Slide9: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  // References for chart canvases
  const lineChartRef = useRef<HTMLCanvasElement | null>(null);
  const barChartRef = useRef<HTMLCanvasElement | null>(null);
  const gaugeChartRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    let lineChart: Chart | null = null;
    let barChart: Chart | null = null;
    let gaugeChart: Chart | null = null;
    
    // Line chart data and config
    if (lineChartRef.current) {
      const lineCtx = lineChartRef.current.getContext('2d');
      if (lineCtx) {
        lineChart = new Chart(lineCtx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Organic Traffic',
                data: [1200, 1900, 3000, 5000, 6000, 7000],
                borderColor: '#8A2BE2', // Purple
                backgroundColor: 'rgba(138, 43, 226, 0.1)',
                tension: 0.4,
                fill: true,
              },
              {
                label: 'Paid Traffic',
                data: [2000, 2500, 2700, 3500, 4200, 5500],
                borderColor: '#4169E1', // Royal Blue
                backgroundColor: 'rgba(65, 105, 225, 0.1)',
                tension: 0.4,
                fill: true,
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 2000,
              easing: 'easeOutQuart'
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(0, 0, 0, 0.05)'
                }
              },
              x: {
                grid: {
                  display: false
                }
              }
            },
            plugins: {
              legend: {
                display: false, // Hide the default legend since we have a custom one in the header
              },
              tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: 10,
                cornerRadius: 4,
                boxPadding: 3
              }
            }
          }
        });
      }
    }
    
    // Bar chart data and config
    if (barChartRef.current) {
      const barCtx = barChartRef.current.getContext('2d');
      if (barCtx) {
        barChart = new Chart(barCtx, {
          type: 'bar',
          data: {
            labels: ['Email', 'Social', 'Direct', 'Organic', 'Referral'],
            datasets: [{
              label: 'Conversion Rate (%)',
              data: [4.2, 2.8, 5.1, 3.9, 6.3],
              backgroundColor: [
                'rgba(138, 43, 226, 0.7)', // Purple
                'rgba(65, 105, 225, 0.7)', // Royal Blue
                'rgba(75, 192, 192, 0.7)', // Teal
                'rgba(255, 159, 64, 0.7)', // Orange
                'rgba(153, 102, 255, 0.7)', // Purple
              ],
              borderColor: [
                'rgba(138, 43, 226, 1)',
                'rgba(65, 105, 225, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
              borderRadius: 4,
              barPercentage: 0.6,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              delay: (context) => {
                return context.dataIndex * 100;
              },
              duration: 1000,
              easing: 'easeOutQuart'
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 8,
                ticks: {
                  callback: function(value) {
                    return value + '%';
                  }
                },
                grid: {
                  color: 'rgba(0, 0, 0, 0.05)'
                }
              },
              x: {
                grid: {
                  display: false
                }
              }
            },
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: 10,
                cornerRadius: 4,
                callbacks: {
                  label: function(context) {
                    return context.dataset.label + ': ' + context.parsed.y + '%';
                  }
                }
              }
            }
          }
        });
      }
    }
    
    // Gauge chart data and config
    if (gaugeChartRef.current) {
      const gaugeCtx = gaugeChartRef.current.getContext('2d');
      if (gaugeCtx) {
        gaugeChart = new Chart(gaugeCtx, {
          type: 'doughnut',
          data: {
            labels: ['Complete', 'Remaining'],
            datasets: [{
              data: [75, 25],
              backgroundColor: [
                '#8A2BE2', // Purple
                '#F3E8FF', // Very Light Purple
              ],
              borderWidth: 0,
            }]
          },
          options: {
            cutout: '75%',
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              animateRotate: true,
              animateScale: true,
              duration: 1500,
              easing: 'easeOutCirc'
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
          }
        });
      }
    }
    
    // Cleanup function to destroy charts when component unmounts
    return () => {
      if (lineChart) lineChart.destroy();
      if (barChart) barChart.destroy();
      if (gaugeChart) gaugeChart.destroy();
    };
  }, []);
  
  return (
    <div className="slide-container" style={{ 
        backgroundColor: '#ffffff',
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: '0',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}>
      {/* Fractal Pattern Background */}
      <FractalBackground />
      
      <div className="relative z-10 px-16 h-full flex flex-col" style={{ backgroundColor: 'transparent' }}>
        <div className="mt-12 mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent inline-block leading-tight tracking-tight">
            Analytics & Optimization
          </h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-4 text-gray-800">Measuring performance and optimizing for growth</p>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-2">
          {/* KPI Cards */}
          <div className="bg-white p-2 rounded-lg border border-gray-200" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center mr-1">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-500">Conversion Rate</span>
              </div>
              <span className="text-sm font-bold text-gray-800">4.8%</span>
              <span className="text-xs text-green-500 flex items-center">
                <svg className="w-2 h-2 mr-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                </svg>
                0.8%
              </span>
            </div>
          </div>
          
          <div className="bg-white p-2 rounded-lg border border-gray-200" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-500">New Clients</span>
              </div>
              <span className="text-sm font-bold text-gray-800">128</span>
              <span className="text-xs text-green-500 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                </svg>
                12%
              </span>
            </div>
          </div>
          
          <div className="bg-white p-2 rounded-lg border border-gray-200" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-500">Revenue</span>
              </div>
              <span className="text-sm font-bold text-gray-800">$89.4k</span>
              <span className="text-xs text-green-500 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                </svg>
                9.2%
              </span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-2">
          {/* Line Chart */}
          <div className="bg-white p-2 rounded-lg border border-gray-200" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <div className="flex justify-between items-center mb-1 px-1">
              <h3 className="text-xs font-semibold text-gray-700">Website Traffic</h3>
              <div className="flex items-center text-xs">
                <div className="flex items-center mr-2">
                  <div className="w-2 h-2 rounded-full bg-purple-600 mr-1"></div>
                  <span className="text-gray-600 text-xs">Organic</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-1"></div>
                  <span className="text-gray-600 text-xs">Paid</span>
                </div>
              </div>
            </div>
            <div className="h-24">
              <canvas ref={lineChartRef}></canvas>
            </div>
          </div>
          
          {/* Bar Chart */}
          <div className="bg-white p-2 rounded-lg border border-gray-200" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h3 className="text-xs font-semibold text-gray-700 mb-1 px-1">Channel Performance</h3>
            <div className="h-24">
              <canvas ref={barChartRef}></canvas>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-2">
          {/* Gauge Chart */}
          <div className="bg-white p-2 rounded-lg border border-gray-200" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h3 className="text-xs font-semibold text-gray-700 mb-1 px-1">Goal Completion</h3>
            <div className="h-16 relative">
              <canvas ref={gaugeChartRef}></canvas>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-base font-bold text-gray-800">75%</span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-xs text-gray-500">Q3 Target: 80%</span>
            </div>
          </div>
          
          {/* Top Content Table */}
          <div className="bg-white p-2 rounded-lg border border-gray-200 col-span-2" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h3 className="text-xs font-semibold text-gray-700 mb-1 px-1">Top Performing Content</h3>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-0.5 px-1 font-medium text-gray-600">Content</th>
                  <th className="text-right py-0.5 px-1 font-medium text-gray-600">Views</th>
                  <th className="text-right py-0.5 px-1 font-medium text-gray-600">Conv. Rate</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-xs">
                <tr className="border-b border-gray-100">
                  <td className="py-0.5 px-1">AI Guide</td>
                  <td className="py-0.5 px-1 text-right">8,452</td>
                  <td className="py-0.5 px-1 text-right">4.2%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-0.5 px-1">Case Study</td>
                  <td className="py-0.5 px-1 text-right">6,731</td>
                  <td className="py-0.5 px-1 text-right">3.8%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-0.5 px-1">Webinar</td>
                  <td className="py-0.5 px-1 text-right">5,128</td>
                  <td className="py-0.5 px-1 text-right">5.1%</td>
                </tr>
                <tr>
                  <td className="py-0.5 px-1">Blog Post</td>
                  <td className="py-0.5 px-1 text-right">4,390</td>
                  <td className="py-0.5 px-1 text-right">2.3%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="flex justify-center mb-1">
          <div className="bg-gray-50 p-1 rounded-lg border border-gray-200 flex items-center" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <span 
              className="material-symbols-outlined animated-gradient-text" 
              style={{ 
                fontSize: '24px',
                marginRight: '12px'
              }}
            >
              bolt
            </span>
            <span className="text-xs text-gray-600">Unified analytics platform tracking agent team performance across sales, service, and operations for enhanced productivity. </span>
          </div>
        </div>
        
        <div className="mt-6">
          <div 
            className="value-container"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.98)',
              transition: 'opacity 0.7s ease-in-out 2.0s, transform 0.7s ease-in-out 2.0s'
            }}
          >
            <div style={{ 
              marginRight: '12px',
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}>
              <span 
                className="material-symbols-outlined animated-gradient-text" 
                style={{ 
                  fontSize: '24px'
                }}
              >
                bolt
              </span>
            </div>
            <p className="value-text">Gain actionable insights from real-time analytics to optimize marketing spend and increase ROI by 30%.</p>
          </div>
        </div>
      </div>
      
      <div
        className="absolute bottom-0 w-full py-3 px-10 flex justify-between items-center border-t border-gray-200 z-20"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        
        <div className="slide-footer-logo relative inline-block">
          SUPER{'{SYMMETRY}'}
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 mr-3">Confidential</span>
          <span className="text-xs text-gray-500">9</span>
        </div>
      </div>
    </div>
  );
};

export default Slide9;
