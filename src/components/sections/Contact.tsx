import React, { useState } from 'react';
import { useThemeStore } from '../store/themeStore';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { supabase } from '../config/supabase';
import { ContactFormData } from '../types';

/**
 * Available budget ranges for project estimation
 * Used in the contact form dropdown selection
 */
const budgetRanges = [
  '1,000-5,000',
  '5,000-10,000',
  '10,000-15,000',
  '15,000-20,000',
  '20,000-25,000',
  '25,000-30,000',
  '30,000+'
];

/**
 * Contact component provides a form for users to submit project inquiries
 * 
 * Features include:
 * - Comprehensive project inquiry form with validation
 * - Integration with Supabase for form submission storage
 * - Date picker for project timeline selection
 * - Budget range selection
 * - Success/error status messaging
 * - Themed styling based on light/dark mode
 * 
 * @returns {JSX.Element} The rendered Contact component
 */
export const Contact: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    completionDate: new Date(),
    budget: budgetRanges[0],
    projectDescription: ''
  });

  /**
   * Handles form submission, validates data, and sends to Supabase
   * 
   * @param {React.FormEvent} e - The form submission event
   * @returns {Promise<void>}
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Convert the form data to snake_case to match database columns
      const submissionData = {
        full_name: formData.fullName,
        email: formData.email,
        company_name: formData.companyName,
        phone_number: formData.phoneNumber,
        completion_date: formData.completionDate.toISOString(),
        budget: formData.budget,
        project_description: formData.projectDescription,
        submitted_at: new Date().toISOString()
      };

      console.log('Submitting data:', submissionData); // Debug log

      const { error } = await supabase
        .from('contact_submissions')
        .insert([submissionData]);

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your submission! We\'ll be in touch soon.'
      });
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        completionDate: new Date(),
        budget: budgetRanges[0],
        projectDescription: ''
      });
    } catch (error: any) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: `Error: ${error.message || 'Something went wrong. Please try again later.'}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName = `w-full p-3 rounded-lg border ${
    isDarkMode
      ? 'bg-gray-800 border-gray-700 text-white'
      : 'bg-white border-gray-300 text-gray-900'
  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`;

  const labelClassName = `block text-sm font-medium mb-1 ${
    isDarkMode ? 'text-gray-300' : 'text-gray-700'
  }`;

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl section-header mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Contact Us
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            Let's discuss your project and bring your ideas to life
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className={labelClassName}>Full Name</label>
              <input
                type="text"
                id="fullName"
                required
                className={inputClassName}
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClassName}>Email</label>
              <input
                type="email"
                id="email"
                required
                className={inputClassName}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="companyName" className={labelClassName}>Company Name</label>
              <input
                type="text"
                id="companyName"
                required
                className={inputClassName}
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className={labelClassName}>Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                required
                className={inputClassName}
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="completionDate" className={labelClassName}>
                Desired Project Completion Date
              </label>
              <DatePicker
                selected={formData.completionDate}
                onChange={(date: Date) => setFormData({ ...formData, completionDate: date })}
                minDate={new Date()}
                className={inputClassName}
                dateFormat="MMMM d, yyyy"
              />
            </div>

            <div>
              <label htmlFor="budget" className={labelClassName}>Estimated Budget</label>
              <select
                id="budget"
                required
                className={inputClassName}
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              >
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    ${range}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="projectDescription" className={labelClassName}>
              Project Description
            </label>
            <textarea
              id="projectDescription"
              required
              rows={6}
              className={inputClassName}
              value={formData.projectDescription}
              onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
            />
          </div>

          {submitStatus.type && (
            <div className={`p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg text-white font-medium ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            } transition-colors`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
};