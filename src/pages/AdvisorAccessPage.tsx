import React, { useState } from 'react';
import { useThemeStore } from '../store/themeStore';
import { SimpleNavbar } from '../layouts/core/SimpleNavbar';
import { Background } from '../layouts/core/Background';

/**
 * AdvisorAccessPage component
 * 
 * An orphan page for advisor access with informational content and a data capture form
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
    phone: '',
    message: '',
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        message: 'Thank you! Your information has been submitted successfully.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        agreeToTerms: false
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
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 hero-header">
              Advisor Access Portal
            </h1>
            
            {/* Content Section */}
            <section className="mb-16">
              <div className={`p-8 rounded-lg shadow-lg ${
                isDarkMode ? 'bg-gray-800/80 text-white' : 'bg-white/90 text-gray-800'
              }`}>
                <h2 className="text-3xl font-semibold mb-6">Welcome to the Advisor Portal</h2>
                
                <div className="space-y-6">
                  <p className="text-lg">
                    Thank you for your interest in becoming a SyperSymmetry advisor. Our advisors play a crucial role in 
                    helping us shape our products, services, and strategic direction.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-medium mb-3">Benefits of Becoming an Advisor</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Early access to new features and products</li>
                        <li>Influence product development roadmap</li>
                        <li>Networking opportunities with industry leaders</li>
                        <li>Recognition as a thought leader in your field</li>
                        <li>Exclusive invitations to advisor-only events</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium mb-3">What We're Looking For</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Industry expertise in AI, technology, or related fields</li>
                        <li>Strategic thinking and innovative mindset</li>
                        <li>Commitment to quarterly advisory sessions</li>
                        <li>Passion for emerging technologies</li>
                        <li>Willingness to provide honest feedback</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-lg">
                    Please complete the form below to express your interest. Our team will review your 
                    information and contact you within 3-5 business days.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Form Section */}
            <section>
              <div className={`p-8 rounded-lg shadow-lg ${
                isDarkMode ? 'bg-gray-800/80 text-white' : 'bg-white/90 text-gray-800'
              }`}>
                <h2 className="text-3xl font-semibold mb-6">Advisor Application</h2>
                
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
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Full Name *
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
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-gray-50 border-gray-300 text-gray-900'
                        }`}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email Address *
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
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-gray-50 border-gray-300 text-gray-900'
                        }`}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block mb-2 font-medium">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full p-3 rounded-md border ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-gray-50 border-gray-300 text-gray-900'
                        }`}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full p-3 rounded-md border ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-gray-50 border-gray-300 text-gray-900'
                        }`}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Why are you interested in becoming an advisor? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full p-3 rounded-md border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-gray-50 border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 rounded"
                      />
                    </div>
                    <label htmlFor="agreeToTerms" className="ml-2 text-sm">
                      I agree to the processing of my personal data in accordance with the 
                      <a href="#" className="text-blue-500 hover:underline"> Privacy Policy</a>.
                    </label>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full md:w-auto px-6 py-3 rounded-md font-medium transition-all ${
                        isDarkMode
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdvisorAccessPage;
