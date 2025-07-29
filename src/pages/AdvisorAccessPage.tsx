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
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className={`p-8 rounded-2xl shadow-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-400/30 hover:border-blue-300/50' 
                  : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:border-blue-300'
              }`}>
                <div className={`text-3xl mb-4 ${
                  isDarkMode ? 'text-blue-300' : 'text-blue-600'
                }`}>🎯</div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Professional Marketing Content</h3>
                <p className={`mb-6 font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Transform every episode into a complete content package for your marketing needs:
                </p>
                <ul className={`space-y-3 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  <li className="flex items-start"><span className="text-green-400 mr-3 font-bold">✓</span>3-5 short video clips with key Agent AI insights</li>
                  <li className="flex items-start"><span className="text-green-400 mr-3 font-bold">✓</span>5-8 quote graphics optimized for social media</li>
                  <li className="flex items-start"><span className="text-green-400 mr-3 font-bold">✓</span>Written summaries adaptable for newsletters</li>
                  <li className="flex items-start"><span className="text-green-400 mr-3 font-bold">✓</span>Professional audio clips for website integration</li>
                  <li className="flex items-start"><span className="text-green-400 mr-3 font-bold">✓</span>Social media templates with industry intelligence</li>
                </ul>
              </div>
              
              <div className={`p-8 rounded-2xl shadow-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-400/30 hover:border-green-300/50' 
                  : 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:border-green-300'
              }`}>
                <div className={`text-3xl mb-4 ${
                  isDarkMode ? 'text-green-300' : 'text-green-600'
                }`}>📊</div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Comprehensive Strategic Analysis</h3>
                <p className={`mb-6 font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Get actionable intelligence that goes beyond episode summaries:
                </p>
                <ul className={`space-y-3 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  <li className="flex items-start"><span className="text-green-400 mr-3 font-bold">✓</span>Executive summaries highlighting practice-relevant insights</li>
                  <li className="flex items-start"><span className="text-green-400 mr-3 font-bold">✓</span>Trend analysis identifying patterns across episodes</li>
                  <li className="flex items-start"><span className="text-green-400 mr-3 font-bold">✓</span>Quarterly strategic intelligence reports</li>
                  <li className="flex items-start"><span className="text-green-400 mr-3 font-bold">✓</span>Action item extraction with implementation guidance</li>
                  <li className="flex items-start"><span className="text-green-400 mr-3 font-bold">✓</span>Regulatory and competitive analysis for independents</li>
                </ul>
              </div>
              
              <div className={`p-8 rounded-2xl shadow-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 md:col-span-2 max-w-2xl mx-auto ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-400/30 hover:border-purple-300/50' 
                  : 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:border-purple-300'
              }`}>
                <div className={`text-3xl mb-4 ${
                  isDarkMode ? 'text-purple-300' : 'text-purple-600'
                }`}>🤝</div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Community & Client Connections</h3>
                <p className={`mb-6 font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Build relationships that drive your practice forward:
                </p>
                <ul className={`space-y-3 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  <li className="flex items-start"><span className="text-green-400 mr-3 font-bold">✓</span>Curated community of Agent AI-focused professionals</li>
                  <li className="flex items-start"><span className="text-green-400 mr-3 font-bold">✓</span>Directory listing showcasing your expertise</li>
                  <li className="flex items-start"><span className="text-green-400 mr-3 font-bold">✓</span>Referral network across geographic markets</li>
                  <li className="flex items-start"><span className="text-green-400 mr-3 font-bold">✓</span>Client matching with prospects seeking AI-savvy advisors</li>
                  <li className="flex items-start"><span className="text-green-400 mr-3 font-bold">✓</span>Peer discussions on implementation experiences</li>
                </ul>
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
              <div className={`p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-slate-700/40 to-slate-800/40 border border-slate-600/30' 
                  : 'bg-white border border-gray-200'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Stay Ahead Without the Research Overhead</h3>
                <p className={`text-base leading-relaxed font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Agent AI developments happen faster than most advisors can track. Our community does the research, analysis, 
                  and trend identification for you, delivering curated insights that help you understand what's coming and how it affects your practice.
                </p>
              </div>
              
              <div className={`p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-slate-700/40 to-slate-800/40 border border-slate-600/30' 
                  : 'bg-white border border-gray-200'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Content That Positions You as an Industry Leader</h3>
                <p className={`text-base leading-relaxed font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Every episode generates shareable content designed specifically for financial advisor marketing needs. Your clients 
                  and prospects see you as an advisor who understands the future of financial planning, not just current practices.
                </p>
              </div>
              
              <div className={`p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-slate-700/40 to-slate-800/40 border border-slate-600/30' 
                  : 'bg-white border border-gray-200'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Connect with Like-Minded Professionals</h3>
                <p className={`text-base leading-relaxed font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Join a curated community of advisors thinking seriously about Agent AI's role in financial planning. Share experiences, 
                  learn from implementations, and connect with prospects who seek advisors who understand modern approaches.
                </p>
              </div>
              
              <div className={`p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-slate-700/40 to-slate-800/40 border border-slate-600/30' 
                  : 'bg-white border border-gray-200'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Actionable Intelligence, Not Just Industry News</h3>
                <p className={`text-base leading-relaxed font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Get practical implementation guidance, real-world case studies, and specific strategies you can apply in your practice. 
                  Our analysis provides actionable intelligence for independent advisors, not theoretical discussions.
                </p>
              </div>
              
              <div className={`p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-slate-700/40 to-slate-800/40 border border-slate-600/30' 
                  : 'bg-white border border-gray-200'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Comprehensive Analysis Across All Trends</h3>
                <p className={`text-base leading-relaxed font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Our ongoing analysis provides comprehensive intelligence about Agent AI trends, regulatory implications, and competitive 
                  developments. Get quarterly reports that synthesize insights into strategic intelligence for practice planning.
                </p>
              </div>
              
              <div className={`p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-slate-700/40 to-slate-800/40 border border-slate-600/30' 
                  : 'bg-white border border-gray-200'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Early Access to Industry Developments</h3>
                <p className={`text-base leading-relaxed font-light ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Community members get early access to industry developments, expert interviews, and implementation case studies. 
                  Stay ahead of competitors while they're still learning about basic automation.
                </p>
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
