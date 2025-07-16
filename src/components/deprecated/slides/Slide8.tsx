import React from 'react';
import { UserPlus, Monitor, MessageSquare, CalendarCheck, Book } from 'lucide-react';
import { SlideProps } from './SlideInterface';
import './SlideStyles.css';

/**
 * Slide 8: Servicing (Client & Team Experience) - Third pillar of the engagement approach
 * 
 * @param {SlideProps} props - Component props
 * @returns {JSX.Element} The rendered Slide8 component
 */
const Slide8: React.FC<SlideProps> = ({ businessName = 'YourCompany' }) => {
  return (
    <div>
      <div className="content px-16">
        {/* Title Section with good spacing from top */}
        <div className="mt-16 mb-8">
          <h1 className="title text-4xl" style={{fontSize: '36px', fontWeight: 'normal', color: '#1a202c', textAlign: 'start'}}>03 | Servicing (Client & Team Experience)</h1>
          <div className="w-24 h-1 bg-purple-600 mt-3"></div>
          <p className="text-lg mt-3">Optimizing {businessName}'s customer service and support through advanced automation, ensuring efficient and personalized interactions.</p>
        </div>
        
        {/* Content Area */}
        <div className="mb-6">
          <div className="timeline" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            position: 'relative',
            marginTop: '40px',
            marginBottom: '20px'
          }}>
            {/* Timeline connector line */}
            <div style={{
              content: "''",
              position: 'absolute',
              top: '30px',
              left: '30px',
              right: '30px',
              height: '3px',
              backgroundColor: '#E9D5FF',
              zIndex: 1
            }}></div>
            
            {/* Customer Onboarding */}
            <div className="timeline-item" style={{
              position: 'relative',
              width: '19%',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div className="timeline-circle" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#F3E8FF',
                border: '2px solid #8A2BE2',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '15px',
                zIndex: 3
              }}>
                <UserPlus className="text-purple-600" size={24} />
              </div>
              <div className="content-box" style={{
                backgroundColor: '#F9FAFB',
                borderRadius: '8px',
                padding: '20px',
                height: '200px',
                width: '100%',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 className="font-semibold text-xl">Customer Onboarding</h3>
                <p className="text-gray-600">Streamlined welcome process with automated calls, document distribution, and client intake.</p>
              </div>
            </div>
            
            {/* Self-Service Portal */}
            <div className="timeline-item" style={{
              position: 'relative',
              width: '19%',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div className="timeline-circle" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#F3E8FF',
                border: '2px solid #8A2BE2',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '15px',
                zIndex: 3
              }}>
                <Monitor className="text-purple-600" size={24} />
              </div>
              <div className="content-box" style={{
                backgroundColor: '#F9FAFB',
                borderRadius: '8px',
                padding: '20px',
                height: '200px',
                width: '100%',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 className="font-semibold text-xl">Self-Service Portal</h3>
                <p className="text-gray-600">24/7 client portal with automated onboarding and form distribution for immediate access.</p>
              </div>
            </div>
            
            {/* Multi-modal Chat */}
            <div className="timeline-item" style={{
              position: 'relative',
              width: '19%',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div className="timeline-circle" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#F3E8FF',
                border: '2px solid #8A2BE2',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '15px',
                zIndex: 3
              }}>
                <MessageSquare className="text-purple-600" size={24} />
              </div>
              <div className="content-box" style={{
                backgroundColor: '#F9FAFB',
                borderRadius: '8px',
                padding: '20px',
                height: '200px',
                width: '100%',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 className="font-semibold text-xl">Multi-modal Chat</h3>
                <p className="text-gray-600">AI conversations across platforms with instant chat-based Q&A support.</p>
              </div>
            </div>
            
            {/* Meeting Automation */}
            <div className="timeline-item" style={{
              position: 'relative',
              width: '19%',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div className="timeline-circle" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#F3E8FF',
                border: '2px solid #8A2BE2',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '15px',
                zIndex: 3
              }}>
                <CalendarCheck className="text-purple-600" size={24} />
              </div>
              <div className="content-box" style={{
                backgroundColor: '#F9FAFB',
                borderRadius: '8px',
                padding: '20px',
                height: '200px',
                width: '100%',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 className="font-semibold text-xl">Meeting Automation</h3>
                <p className="text-gray-600">Smart scheduling, reminders, and follow-ups to optimize client meetings.</p>
              </div>
            </div>
            
            {/* Knowledge Base */}
            <div className="timeline-item" style={{
              position: 'relative',
              width: '19%',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div className="timeline-circle" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#F3E8FF',
                border: '2px solid #8A2BE2',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '15px',
                zIndex: 3
              }}>
                <Book className="text-purple-600" size={24} />
              </div>
              <div className="content-box" style={{
                backgroundColor: '#F9FAFB',
                borderRadius: '8px',
                padding: '20px',
                height: '200px',
                width: '100%',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 className="font-semibold text-xl">Knowledge Base</h3>
                <p className="text-gray-600">Secure RAG-based repository with voice/chat access to business knowledge.</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-800 flex items-center">
                <span className="text-yellow-500 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </span>
                <span>Value: Provide instant, 24/7 personalized support while reducing response times from hours to seconds, improving satisfaction.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide8;
