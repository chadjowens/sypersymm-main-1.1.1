import React, { useState } from 'react';
import { useThemeStore } from '../store/themeStore';
import { SimpleNavbar } from '../layouts/core/SimpleNavbar';
import { Background } from '../layouts/core/Background';

/**
 * AdvisorAccessPage component - The Adaptive Advisor Community
 * 
 * An orphan page for the Agent AI community for financial planning professionals
 * Not linked from main navigation, accessible only via direct URL
 * 
 * @returns {JSX.Element} The rendered AdvisorAccessPage component
 */
const AdvisorAccessPage: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: '',
    firmSize: '',
    contentPackage: true,
    analysisReports: true,
    directoryListing: false,
    communityEvents: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Here you would typically send the data to your backend or Supabase
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Welcome to the Agent AI Community! Check your email for next steps.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        interest: '',
        firmSize: '',
        contentPackage: true,
        analysisReports: true,
        directoryListing: false,
        communityEvents: false
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your information. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'dark' : 'light'}`}>
      <Background />
      <div className="relative">
        <SimpleNavbar />
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-6xl text-center">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 hero-header ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Join the Agent AI Conversation That's Shaping Financial Planning's Future
            </h1>
            <p className={`text-xl md:text-2xl mb-8 font-light max-w-4xl mx-auto ${
              isDarkMode ? 'text-gray-200' : 'text-gray-600'
            }`}>
              Connect with forward-thinking financial planners who are exploring how Agent AI will transform client relationships, 
              operational efficiency, and competitive advantage. Get the insights, shareable content, and industry connections 
              you need to lead in the age of autonomous intelligence.
            </p>
            
            <div className={`p-8 rounded-2xl mb-8 max-w-4xl mx-auto backdrop-blur-sm border ${
              isDarkMode 
                ? 'bg-blue-500/20 border-blue-400/30 text-white' 
                : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 text-gray-800'
            }`}>
              <h3 className={`text-2xl font-semibold mb-4 ${
                isDarkMode ? 'text-blue-200' : 'text-blue-800'
              }`}>Every episode generates:</h3>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-blue-100' : 'text-blue-700'
              }`}>
                Professional content you can share across your marketing channels • Comprehensive analysis you can use in strategic planning • 
                Connections with prospects who specifically seek Agent AI-savvy advisors
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#signup" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
                Join the Agent AI Community
              </a>
              <a href="#value-props" className={`${
                isDarkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              } px-8 py-3 rounded-lg text-lg font-medium transition-colors`}>
                Get Episode Insights & Content
              </a>
            </div>
          </div>
        </section>



        {/* Overview Section */}
        <section className="py-20" id="value-props">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 hero-header">
              What You Get as a Community Member
            </h2>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <p className={`text-xl md:text-2xl mb-6 font-light ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>
                The Agent AI revolution isn't coming to financial planning—it's already here. While large institutions deploy 
                sophisticated AI capabilities with dedicated teams, independent advisors need a different approach: one that 
                provides enterprise-level intelligence with practical implementation guidance.
              </p>
              <p className={`text-xl md:text-2xl font-light ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>
                The Adaptive Advisor community bridges that gap, providing you with the research, analysis, and shareable 
                content you need to compete effectively while building connections with like-minded professionals and qualified prospects.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* First row: Two cards side by side */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Card 1: Transform every episode */}
                <div 
                  style={{
                    backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)',
                    minHeight: '225px'
                  }}
                  className={`
                    p-6 
                    rounded-md 
                    backdrop-blur-sm 
                    transition-all
                    duration-300
                    hover:shadow-lg
                    border
                    hover:!bg-opacity-70
                    h-full
                    flex flex-col
                    ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
                  `}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)';
                  }}
                >
                  <div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>
                      📊
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Transform every episode into a complete content package for your marketing needs:
                  </h3>
                  <ul className={`space-y-2 text-base leading-relaxed font-light flex-grow ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-600'
                  }`}>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${
                        isDarkMode ? 'text-green-400' : 'text-green-500'
                      }`}>✓</span>
                      Social media posts and graphics
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${
                        isDarkMode ? 'text-green-400' : 'text-green-500'
                      }`}>✓</span>
                      Newsletter content and insights
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${
                        isDarkMode ? 'text-green-400' : 'text-green-500'
                      }`}>✓</span>
                      Blog post outlines and key points
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${
                        isDarkMode ? 'text-green-400' : 'text-green-500'
                      }`}>✓</span>
                      Client conversation starters
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${
                        isDarkMode ? 'text-green-400' : 'text-green-500'
                      }`}>✓</span>
                      Prospect education materials
                    </li>
                  </ul>
                </div>
                
                {/* Card 2: Community & Client Connections */}
                <div 
                  style={{
                    backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)',
                    minHeight: '225px'
                  }}
                  className={`
                    p-6 
                    rounded-md 
                    backdrop-blur-sm 
                    transition-all
                    duration-300
                    hover:shadow-lg
                    border
                    hover:!bg-opacity-70
                    h-full
                    flex flex-col
                    ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
                  `}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)';
                  }}
                >
                  <div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>
                      🤝
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Community & Client Connections
                  </h3>
                  <p className={`mb-4 font-light ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
                    Build relationships that drive your practice forward:
                  </p>
                  <ul className={`space-y-2 flex-grow ${isDarkMode ? 'text-gray-200' : 'text-gray-600'} font-light leading-snug`}>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`}>✓</span>
                      Curated community of Agent AI-focused professionals
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`}>✓</span>
                      Directory listing showcasing your expertise
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`}>✓</span>
                      Referral network across geographic markets
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`}>✓</span>
                      Client matching with prospects seeking AI-savvy advisors
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`}>✓</span>
                      Peer discussions on implementation experiences
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Second row: Full width card */}
              <div className="max-w-3xl mx-auto">
                <div 
                  style={{
                    backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)',
                    minHeight: '225px'
                  }}
                  className={`
                    p-6 
                    rounded-md 
                    backdrop-blur-sm 
                    transition-all
                    duration-300
                    hover:shadow-lg
                    border
                    hover:!bg-opacity-70
                    h-full
                    flex flex-col
                    ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
                  `}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)';
                  }}
                >
                  <div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>
                      🎯
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Connect with prospects who specifically seek Agent AI-savvy advisors
                  </h3>
                  <p className={`text-base leading-relaxed font-light flex-grow ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-600'
                  }`}>
                    Our community includes a curated directory that connects forward-thinking prospects with advisors who 
                    understand Agent AI's role in modern financial planning. Position yourself as the advisor who gets it, 
                    attracting clients who value innovation and strategic thinking about the industry's technological future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reasons Section */}
        <section className={`py-20 ${
          isDarkMode ? 'bg-gray-900/30' : 'bg-gray-50'
        }`}>
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 hero-header">
              Why Forward-Thinking Advisors Choose Our Community
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                style={{
                  backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)',
                  minHeight: '225px'
                }}
                className={`
                  p-6 
                  rounded-md 
                  backdrop-blur-sm 
                  transition-all
                  duration-300
                  hover:shadow-lg
                  border
                  hover:!bg-opacity-70
                  h-full
                  flex flex-col
                  ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
                `}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)';
                }}
              >
                <div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>
                    🔍
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Stay Ahead Without the Research Overhead
                </h3>
                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'} mb-0 font-light leading-snug flex-grow`}>
                  Agent AI developments happen faster than most advisors can track. Our community does the research, analysis, 
                  and trend identification for you, delivering curated insights that help you understand what's coming and how it affects your practice.
                </p>
              </div>
              
              <div 
                style={{
                  backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)',
                  minHeight: '225px'
                }}
                className={`
                  p-6 
                  rounded-md 
                  backdrop-blur-sm 
                  transition-all
                  duration-300
                  hover:shadow-lg
                  border
                  hover:!bg-opacity-70
                  h-full
                  flex flex-col
                  ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
                `}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)';
                }}
              >
                <div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>
                    👑
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Content That Positions You as an Industry Leader
                </h3>
                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'} mb-0 font-light leading-snug flex-grow`}>
                  Every episode generates shareable content designed specifically for financial advisor marketing needs. Your clients 
                  and prospects see you as an advisor who understands the future of financial planning, not just current practices.
                </p>
              </div>
              
              <div 
                style={{
                  backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)',
                  minHeight: '225px'
                }}
                className={`
                  p-6 
                  rounded-md 
                  backdrop-blur-sm 
                  transition-all
                  duration-300
                  hover:shadow-lg
                  border
                  hover:!bg-opacity-70
                  h-full
                  flex flex-col
                  ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
                `}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)';
                }}
              >
                <div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>
                    🤝
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Connect with Like-Minded Professionals
                </h3>
                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'} mb-0 font-light leading-snug flex-grow`}>
                  Join a curated community of advisors thinking seriously about Agent AI's role in financial planning. Share experiences, 
                  learn from implementations, and connect with prospects who seek advisors who understand modern approaches.
                </p>
              </div>
              
              <div 
                style={{
                  backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)',
                  minHeight: '225px'
                }}
                className={`
                  p-6 
                  rounded-md 
                  backdrop-blur-sm 
                  transition-all
                  duration-300
                  hover:shadow-lg
                  border
                  hover:!bg-opacity-70
                  h-full
                  flex flex-col
                  ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
                `}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)';
                }}
              >
                <div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>
                    ⚡
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Actionable Intelligence, Not Just Industry News
                </h3>
                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'} mb-0 font-light leading-snug flex-grow`}>
                  Get practical implementation guidance, real-world case studies, and specific strategies you can apply in your practice. 
                  Our analysis provides actionable intelligence for independent advisors, not theoretical discussions.
                </p>
              </div>
              
              <div 
                style={{
                  backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)',
                  minHeight: '225px'
                }}
                className={`
                  p-6 
                  rounded-md 
                  backdrop-blur-sm 
                  transition-all
                  duration-300
                  hover:shadow-lg
                  border
                  hover:!bg-opacity-70
                  h-full
                  flex flex-col
                  ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
                `}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)';
                }}
              >
                <div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>
                    📈
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Comprehensive Analysis Across All Trends
                </h3>
                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'} mb-0 font-light leading-snug flex-grow`}>
                  Our ongoing analysis provides comprehensive intelligence about Agent AI trends, regulatory implications, and competitive 
                  developments. Get quarterly reports that synthesize insights into strategic intelligence for practice planning.
                </p>
              </div>
              
              <div 
                style={{
                  backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)',
                  minHeight: '225px'
                }}
                className={`
                  p-6 
                  rounded-md 
                  backdrop-blur-sm 
                  transition-all
                  duration-300
                  hover:shadow-lg
                  border
                  hover:!bg-opacity-70
                  h-full
                  flex flex-col
                  ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
                `}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)';
                }}
              >
                <div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>
                    🚀
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Early Access to Industry Developments
                </h3>
                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'} mb-0 font-light leading-snug flex-grow`}>
                  Community members get early access to industry developments, expert interviews, and implementation case studies. 
                  Stay ahead of competitors while they're still learning about basic automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 hero-header">
              Meet Your Community Host
            </h2>
            <div 
              style={{
                backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)'
              }}
              className={`
                rounded-md 
                backdrop-blur-sm 
                transition-all
                duration-300
                hover:shadow-lg
                border
                hover:!bg-opacity-70
                overflow-hidden
                ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
              `}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)';
              }}
            >
              <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
                <div className="md:col-span-1 flex justify-center md:justify-start">
                  <div className={`w-48 h-48 rounded-full flex items-center justify-center text-6xl ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30' 
                      : 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200'
                  }`}>
                    👤
                  </div>
                </div>
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>[Your Name]</h3>
                    <p className={`text-lg font-medium mb-6 ${
                      isDarkMode ? 'text-blue-300' : 'text-blue-600'
                    }`}>Host & Founder of the Agent AI Community</p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className={`text-base leading-relaxed font-light ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-600'
                    }`}>
                      [Your Name] is the host and founder of the Agent AI community for financial planning professionals, 
                      bringing together independent advisors who are shaping the future of the industry through thoughtful 
                      technology adoption and implementation.
                    </p>
                    
                    <p className={`text-base leading-relaxed font-light ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-600'
                    }`}>
                      Through extensive work with financial services organizations including Discover, Citi, and Capital One, 
                      [Your Name] has gained deep insights into both the sophisticated AI capabilities that large institutions 
                      deploy and the unique challenges that independent practices face in competing effectively while maintaining 
                      personal client relationships.
                    </p>
                    
                    <p className={`text-base leading-relaxed font-light ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-600'
                    }`}>
                      [Your Name] provides the analysis, insights, and strategic intelligence that help independent advisors 
                      understand and prepare for the industry's technological evolution. Through comprehensive research and 
                      ongoing analysis of Agent AI developments, the community receives practical guidance that translates 
                      cutting-edge technology into actionable strategies for small-to-mid-size firms.
                    </p>
                    
                    <p className={`text-base leading-relaxed font-light ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-600'
                    }`}>
                      The Adaptive Advisor community represents a vision where independent advisors leverage Agent AI capabilities 
                      to compete effectively with large institutions while maintaining the personal relationships and specialized 
                      service that set them apart.
                    </p>
                    
                    <p className={`text-base leading-relaxed font-light ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-600'
                    }`}>
                      Through work at Supersymmetry, [Your Name] has gained deep insights into Agent AI implementation challenges 
                      and opportunities, which inform the strategic analysis and practical guidance provided to the community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signup Section */}
        <section className="py-16" id="signup">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 hero-header">
              Join the Agent AI Community
            </h2>
            <div className={`p-8 rounded-2xl shadow-lg ${
              isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Welcome to the Agent AI Community</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Get immediate access to shareable content from every episode, comprehensive analysis of Agent AI trends, 
                  and connections with like-minded financial planning professionals who are shaping the industry's future.
                </p>
              </div>
              
              {submitStatus && (
                <div className={`p-4 mb-6 rounded-md ${
                  submitStatus.success 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block mb-2 font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 rounded-md border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className={`block mb-2 font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 rounded-md border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className={`block mb-2 font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Firm/Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-md border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="role" className={`block mb-2 font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Your Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Financial Planner, Wealth Manager, etc."
                      className={`w-full p-3 rounded-md border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interest" className={`block mb-2 font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Primary Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  >
                    <option value="">Select your primary interest</option>
                    <option value="content">Shareable Content</option>
                    <option value="analysis">Industry Analysis</option>
                    <option value="networking">Professional Networking</option>
                    <option value="matching">Client Matching</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="firmSize" className={`block mb-2 font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Firm Size
                  </label>
                  <select
                    id="firmSize"
                    name="firmSize"
                    value={formData.firmSize}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  >
                    <option value="">Select your firm size</option>
                    <option value="solo">Solo Practice</option>
                    <option value="small">2-5 Advisors</option>
                    <option value="medium">6-15 Advisors</option>
                    <option value="large">16+ Advisors</option>
                  </select>
                </div>
                
                <div className={`p-6 rounded-xl ${
                  isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}>
                  <h4 className={`text-lg font-medium mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Community Benefits (select all that apply):</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="contentPackage"
                        name="contentPackage"
                        checked={formData.contentPackage}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="contentPackage" className={`text-sm ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-600'
                      }`}>
                        Send me shareable content from every episode for my marketing channels
                      </label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="analysisReports"
                        name="analysisReports"
                        checked={formData.analysisReports}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="analysisReports" className={`text-sm ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-600'
                      }`}>
                        Include me in the comprehensive quarterly Agent AI analysis reports
                      </label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="directoryListing"
                        name="directoryListing"
                        checked={formData.directoryListing}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="directoryListing" className={`text-sm ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-600'
                      }`}>
                        Add me to the directory for client-advisor matching opportunities
                      </label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="communityEvents"
                        name="communityEvents"
                        checked={formData.communityEvents}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="communityEvents" className={`text-sm ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-600'
                      }`}>
                        Notify me about community networking events and discussions
                      </label>
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg text-white font-medium ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } transition-colors`}
                >
                  {isSubmitting ? 'Submitting...' : 'Join the Community'}
                </button>
              </form>
              
              <p className={`text-center mt-6 text-sm font-light ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We respect your inbox and your business. Unsubscribe anytime. Your information is never shared outside our community.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdvisorAccessPage;
