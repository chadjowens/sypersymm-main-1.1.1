import React, { useState } from 'react';
import { useThemeStore } from '../../../store/themeStore';
import { supabase } from '../../../config/supabase';

/**
 * Available role options for advisor signup
 */
const roleOptions = [
  'Financial Advisor',
  'Financial Planner',
  'Investment Advisor',
  'Wealth Manager',
  'RIA Owner',
  'Broker-Dealer Rep',
  'Insurance Agent',
  'Other'
];

/**
 * Available firm size options
 */
const firmSizeOptions = [
  'Solo Practice',
  '2-5 Advisors',
  '6-20 Advisors',
  '21-50 Advisors',
  '50+ Advisors'
];

/**
 * AdvisorSignupForm component - Community signup form section
 * 
 * This component provides a form for financial advisors to join the Agent AI community.
 * Features include comprehensive form validation, Supabase integration, and themed styling.
 * 
 * @returns {JSX.Element} The rendered AdvisorSignupForm component
 */
export const AdvisorSignupForm: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  // Animation states for form sections (for future scroll animations)
  // const [animationState, setAnimationState] = useState({
  //   header: false,
  //   form: false
  // });
  
  // Refs for animation (disabled for now)
  // const headerRef = useRef<HTMLHeadingElement>(null);
  // const formRef = useRef<HTMLFormElement>(null);
  
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: roleOptions[0],
    interest: '',
    firmSize: '', // Start with empty string to require selection
    contentPackage: false,
    analysisReports: false,
    directoryListing: false,
    communityEvents: false
  });

  // Set up intersection observer for scroll animations (disabled for now)
  // useEffect(() => {
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.2
  //   };
  //   
  //   const observerCallback = (entries: IntersectionObserverEntry[]) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         if (entry.target === headerRef.current) {
  //           setAnimationState(prev => ({ ...prev, header: true }));
  //         } else if (entry.target === formRef.current) {
  //           setAnimationState(prev => ({ ...prev, form: true }));
  //         }
  //       }
  //     });
  //   };
  //   
  //   const observer = new IntersectionObserver(observerCallback, observerOptions);
  //   
  //   if (headerRef.current) observer.observe(headerRef.current);
  //   if (formRef.current) observer.observe(formRef.current);
  //   
  //   return () => {
  //     if (headerRef.current) observer.unobserve(headerRef.current);
  //     if (formRef.current) observer.unobserve(formRef.current);
  //   };
  // }, []);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Comprehensive form validation for all required fields
    if (!formData.name.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter your full name.'
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter your email address.'
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.company.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter your company or firm name.'
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.role || formData.role === '') {
      setSubmitStatus({
        type: 'error',
        message: 'Please select your professional role.'
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.interest.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please describe your interest in Agent AI.'
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.firmSize || formData.firmSize === '') {
      setSubmitStatus({
        type: 'error',
        message: 'Please select your firm size.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare data for Supabase submission
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        company: formData.company.trim(),
        role: formData.role,
        interest: formData.interest.trim(),
        firm_size: formData.firmSize,
        content_package: formData.contentPackage,
        analysis_reports: formData.analysisReports,
        directory_listing: formData.directoryListing,
        community_events: formData.communityEvents,
        submitted_at: new Date().toISOString()
      };

      console.log('Submitting advisor signup data:', submissionData);

      const { error } = await supabase
        .from('advisor_signups')
        .insert([submissionData]);

      if (error) {
        // Handle specific Supabase errors
        if (error.code === '23505') {
          throw new Error('This email address is already registered. Please use a different email or contact support.');
        }
        throw error;
      }
      
      setSubmitStatus({
        type: 'success',
        message: 'Welcome to the Agent AI Community! Check your email for next steps.'
      });
      
      // Reset form on successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        role: roleOptions[0],
        interest: '',
        firmSize: firmSizeOptions[0],
        contentPackage: false,
        analysisReports: false,
        directoryListing: false,
        communityEvents: false
      });
    } catch (error: any) {
      console.error('Advisor signup error:', error);
      
      // Provide user-friendly error messages
      let errorMessage = 'Something went wrong. Please try again later.';
      
      if (error.message) {
        errorMessage = error.message;
      } else if (error.code === 'PGRST301') {
        errorMessage = 'Database connection error. Please check your internet connection and try again.';
      } else if (error.code === '42P01') {
        errorMessage = 'Database table not found. Please contact support.';
      }
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16" id="signup">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 hero-header">
          Join the Agent AI Community
        </h2>

        {/* Form Container */}
        <div className={`p-8 rounded-2xl shadow-lg ${
          isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          {/* Form Introduction */}
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Welcome to the Agent AI Community
            </h3>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              Get immediate access to shareable content from every episode, comprehensive analysis of Agent AI trends, 
              and connections with like-minded financial planning professionals who are shaping the industry's future.
            </p>
          </div>
          
          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
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
            
            {/* Company and Role Row */}
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
            
            {/* Primary Interest */}
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
            
            {/* Firm Size */}
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
            
            {/* Community Benefits */}
            <div className={`p-6 rounded-xl ${
              isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
            }`}>
              <h4 className={`text-lg font-medium mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Community Benefits (select all that apply):
              </h4>
              
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
            
            {/* Status Message */}
            {submitStatus.type && (
              <div className={`p-4 mb-4 rounded-md ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            {/* Submit Button */}
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
          
          {/* Privacy Notice */}
          <p className={`text-center mt-6 text-sm font-light ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            We respect your inbox and your business. Unsubscribe anytime. Your information is never shared outside our community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvisorSignupForm;
