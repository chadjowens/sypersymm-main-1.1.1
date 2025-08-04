import React, { useState } from 'react';
import { useThemeStore } from '../../../store/themeStore';
import { supabase } from '../../../config/supabase';

/**
 * Available professional role options for advisor signup
 * 
 * These options cover the main categories of financial services professionals
 * who would benefit from Future-Forward Planning community membership.
 * The 'Other' option allows for roles not specifically listed.
 * 
 * Note: These values are used directly in the form dropdown and stored
 * in the Supabase database exactly as written.
 */
const roleOptions = [
  'Financial Advisor',      // General financial advisory services
  'Financial Planner',      // Comprehensive financial planning focus
  'Investment Advisor',     // Investment management and advisory
  'Wealth Manager',         // High-net-worth client services
  'RIA Owner',             // Registered Investment Advisor firm owners
  'Broker-Dealer Rep',     // Broker-dealer representatives
  'Insurance Agent',       // Insurance and risk management focus
  'Other'                  // Catch-all for other financial services roles
];

/**
 * Available firm size categories for advisor signup
 * 
 * These categories help segment the community by practice size, enabling
 * more targeted content and networking opportunities. Categories are based
 * on common industry segmentation standards.
 * 
 * Note: These values are stored in Supabase as 'firm_size' field.
 */
const firmSizeOptions = [
  'Solo Practice',         // Individual practitioners
  '2-5 Advisors',         // Small team practices
  '6-20 Advisors',        // Medium-sized firms
  '21-50 Advisors',       // Large regional firms
  '50+ Advisors'          // Enterprise-level organizations
];

/**
 * AdvisorSignupForm component - Future-Forward Planning Community signup form
 * 
 * This component provides a comprehensive signup form for financial advisors to join
 * the Future-Forward Planning community. The form collects advisor information,
 * professional details, and communication preferences.
 * 
 * Key Features:
 * - Multi-field form with validation (name, email, company, role, firm size, interests)
 * - Role selection dropdown with industry-standard options
 * - Firm size categorization for better community segmentation
 * - Optional communication preferences (content packages, analysis reports)
 * - Supabase integration for data persistence
 * - Real-time form validation and error handling
 * - Theme-aware styling with dark/light mode support
 * - Responsive design for mobile and desktop
 * - Success/error status messaging
 * 
 * Form Fields:
 * - Personal: Name, Email, Company
 * - Professional: Role (dropdown), Firm Size (dropdown), Areas of Interest (textarea)
 * - Preferences: Content packages, Analysis reports (checkboxes)
 * 
 * Note: Directory listing and community events checkboxes are temporarily disabled
 * but preserved in code for future implementation.
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
    role: '', // Start with empty string to require selection
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

  /**
   * Handle form input changes for all form elements
   * 
   * This function handles updates to all form fields including:
   * - Text inputs (name, email, company, interest)
   * - Select dropdowns (role, firmSize)
   * - Checkboxes (contentPackage, analysisReports, directoryListing, communityEvents)
   * 
   * @param e - Change event from form elements
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    // Handle checkbox inputs differently - use checked property instead of value
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      // Handle text inputs, textareas, and select dropdowns - use value property
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  /**
   * Handle form submission with validation and Supabase integration
   * 
   * This function performs the following operations:
   * 1. Prevents default form submission behavior
   * 2. Sets loading state and clears previous status messages
   * 3. Validates all required fields with specific error messages
   * 4. Validates email format using regex
   * 5. Submits data to Supabase 'advisor_signups' table
   * 6. Handles success/error responses with user feedback
   * 7. Resets form on successful submission
   * 
   * Required Fields:
   * - name: Full name (trimmed for whitespace)
   * - email: Valid email address (format validated)
   * - company: Company/firm name (trimmed for whitespace)
   * - role: Professional role (must be selected from dropdown)
   * - firmSize: Firm size category (must be selected from dropdown)
   * 
   * Optional Fields:
   * - interest: Areas of interest (textarea)
   * - contentPackage: Boolean preference for content packages
   * - analysisReports: Boolean preference for analysis reports
   * - directoryListing: Boolean preference for directory (currently disabled)
   * - communityEvents: Boolean preference for events (currently disabled)
   * 
   * @param e - Form submission event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // === FORM VALIDATION SECTION ===
    // Validate all required fields with specific error messages for better UX
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

    // Email format validation using regex pattern
    // Pattern ensures: localpart@domain.tld format with no spaces or multiple @ symbols
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
      // === SUPABASE INTEGRATION SECTION ===
      // Prepare data for Supabase submission with proper formatting and field mapping
      // Note: Supabase column names use snake_case while form uses camelCase
      const submissionData = {
        name: formData.name.trim(),                           // Clean whitespace
        email: formData.email.trim().toLowerCase(),           // Normalize email format
        company: formData.company.trim(),                     // Clean whitespace
        role: formData.role,                                  // Direct mapping
        interest: formData.interest.trim(),                   // Clean whitespace
        firm_size: formData.firmSize,                         // Map camelCase to snake_case
        content_package: formData.contentPackage,             // Map camelCase to snake_case
        analysis_reports: formData.analysisReports,           // Map camelCase to snake_case
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
          Join the Future-Forward Planning Community
        </h2>

        {/* Form Container */}
        <div className={`p-8 rounded-2xl shadow-lg ${
          isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          {/* Form Introduction */}
          <div className="text-center mb-8">
            {/* <h3 className={`text-2xl font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Welcome to the Future-Forward Planning Community
            </h3> */}
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              Get immediate access to shareable content from episodes, comprehensive analysis of Future-Forward Planning trends, 
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
                    Send me shareable content from episodes for my marketing channels
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
                    Include me in the comprehensive quarterly Future-Forward Planning analysis reports
                  </label>
                </div>
                
                {/* Temporarily commented out - Directory listing checkbox */}
                {/* <div className="flex items-start space-x-3">
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
                </div> */}
                
                {/* Temporarily commented out - Community events checkbox */}
                {/* <div className="flex items-start space-x-3">
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
                </div> */}
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
