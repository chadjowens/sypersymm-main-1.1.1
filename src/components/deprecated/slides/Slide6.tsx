import React from 'react';
import { Globe, Search, Share2, Edit, Lightbulb } from 'lucide-react';
import { SlideProps } from './SlideInterface';
import './SlideStyles.css';

/**
 * Slide 6: Foundation - First pillar of the engagement approach
 * 
 * @param {SlideProps} props - Component props
 * @returns {JSX.Element} The rendered Slide6 component
 */
const Slide6: React.FC<SlideProps> = ({ businessName = 'YourCompany' }) => {
  return (
    <div>
      {/* Title Section with good spacing from top */}
      <div className="mt-16 mb-8">
        <h1 className="title text-4xl" style={{fontSize: '36px', fontWeight: 'normal', color: '#1a202c'}}>01 | Foundation</h1>
        <div className="w-24 h-1 bg-purple-600 mt-3"></div>
        <p className="text-lg mt-4 text-gray-700">Establishing a robust digital infrastructure and presence for {businessName} essential for all subsequent initiatives.</p>
      </div>
      
      {/* Process Flow Timeline */}
      <div className="mb-6">
        <div className="timeline relative">
          {/* Timeline connector lines */}
          <div className="step-line"></div>
          
          {/* Step 1 */}
          <div className="timeline-step">
            <div className="step-circle">
              <Globe className="text-purple-600" size={24} />
            </div>
            <div className="timeline-content">
              <h3 className="font-semibold text-xl text-gray-800">Website Migration</h3>
              <p className="text-gray-600 mt-2">High-performance hosting, domain management, lead capture landing pages</p>
              <div className="mt-auto text-xs text-gray-500">Phase 1</div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="timeline-step">
            <div className="step-circle">
              <Search className="text-purple-600" size={24} />
            </div>
            <div className="timeline-content">
              <h3 className="font-semibold text-xl text-gray-800">SEO Optimization</h3>
              <p className="text-gray-600 mt-2">Web chat implementation, search visibility, organic traffic growth</p>
              <div className="mt-auto text-xs text-gray-500">Phase 2</div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="timeline-step">
            <div className="step-circle">
              <Share2 className="text-purple-600" size={24} />
            </div>
            <div className="timeline-content">
              <h3 className="font-semibold text-xl text-gray-800">Social Media</h3>
              <p className="text-gray-600 mt-2">Consistent social presence with automated posting and content calendars</p>
              <div className="mt-auto text-xs text-gray-500">Phase 3</div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="timeline-step">
            <div className="step-circle">
              <Edit className="text-purple-600" size={24} />
            </div>
            <div className="timeline-content">
              <h3 className="font-semibold text-xl text-gray-800">Content Creation</h3>
              <p className="text-gray-600 mt-2">Newsletters, whitepapers, e-books, and CTA optimization</p>
              <div className="mt-auto text-xs text-gray-500">Phase 4</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <p className="font-semibold text-gray-800 flex items-center">
            <Lightbulb className="text-yellow-500 mr-3" size={24} />
            <span>Value: Eliminate dependence on third-party providers while gaining control over your digital presence and capturing more organic traffic.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide6;
