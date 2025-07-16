import React from 'react';
import { Search, Send, TrendingUp, MessageSquare, Lightbulb } from 'lucide-react';
import { SlideProps } from './SlideInterface';
import './SlideStyles.css';

/**
 * Slide 7: Sales - Second pillar of the engagement approach
 * 
 * @param {SlideProps} props - Component props
 * @returns {JSX.Element} The rendered Slide7 component
 */
const Slide7: React.FC<SlideProps> = ({ businessName = 'YourCompany' }) => {
  return (
    <div>
      {/* Title Section with good spacing from top */}
      <div className="mt-16 mb-8">
        <h1 className="title text-4xl" style={{fontSize: '36px', fontWeight: 'normal', color: '#1a202c'}}>02 | Sales</h1>
        <div className="w-24 h-1 bg-purple-600 mt-3"></div>
        <p className="text-lg mt-4">AI-powered sales acceleration for {businessName} through an intelligent, optimized pipeline:</p>
      </div>
      
      {/* Content Area */}
      <div className="mb-6">
        <div className="timeline relative">
          {/* Timeline connector lines */}
          <div className="step-line"></div>
          
          {/* Lead Generation */}
          <div className="timeline-step">
            <div className="step-circle">
              <Search className="text-purple-600" size={24} />
            </div>
            <div className="timeline-content">
              <h3 className="font-semibold text-xl mb-2">Lead Generation Systems</h3>
              <p className="text-gray-600 text-sm">Automated lead scraping, qualification, and prioritization from multiple sources.</p>
            </div>
          </div>
          
          {/* Outbound Campaigns */}
          <div className="timeline-step">
            <div className="step-circle">
              <Send className="text-purple-600" size={24} />
            </div>
            <div className="timeline-content">
              <h3 className="font-semibold text-xl mb-2">Outbound Email Campaigns</h3>
              <p className="text-gray-600 text-sm">Personalized outreach optimized for conversion based on prospect's market position.</p>
            </div>
          </div>
          
          {/* Lead Scoring */}
          <div className="timeline-step">
            <div className="step-circle">
              <TrendingUp className="text-purple-600" size={24} />
            </div>
            <div className="timeline-content">
              <h3 className="font-semibold text-xl mb-2">Lead Scoring &amp; Pipeline</h3>
              <p className="text-gray-600 text-sm">Intelligent scoring and auto-responders for timely follow-ups and lead nurturing.</p>
            </div>
          </div>
          
          {/* Call Analysis */}
          <div className="timeline-step">
            <div className="step-circle">
              <MessageSquare className="text-purple-600" size={24} />
            </div>
            <div className="timeline-content">
              <h3 className="font-semibold text-xl mb-2">Call Transcript Analysis</h3>
              <p className="text-gray-600 text-sm">Virtual assistants that transcribe calls, analyze content, and identify next steps.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <p className="font-semibold text-gray-800 flex items-center">
            <Lightbulb className="text-yellow-500 mr-3" size={24} />
            <span>Value: Never run out of prospects with AI-powered lead generation and increase close rates with intelligent scoring and follow-up systems.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide7;
