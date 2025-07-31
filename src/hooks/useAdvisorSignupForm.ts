import { useState } from 'react';
import { supabase } from '../config/supabase';

/**
 * Form data interface for the advisor signup form
 */
export interface AdvisorFormData {
  name: string;
  email: string;
  company: string;
  role: string;
  interest: string;
  firmSize: string;
  contentPackage: boolean;
  analysisReports: boolean;
  directoryListing: boolean;
  communityEvents: boolean;
}

/**
 * Submit status interface for form submission feedback
 */
export interface SubmitStatus {
  success: boolean;
  message: string;
}

/**
 * Return type for the useAdvisorSignupForm hook
 */
export interface UseAdvisorSignupFormReturn {
  formData: AdvisorFormData;
  isSubmitting: boolean;
  submitStatus: SubmitStatus | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

/**
 * Initial form data values
 */
const initialFormData: AdvisorFormData = {
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
};

/**
 * Custom hook for managing advisor signup form state and logic
 * 
 * This hook encapsulates all form-related state management, validation,
 * and submission logic for the advisor community signup form.
 * 
 * @returns {UseAdvisorSignupFormReturn} Form state and handlers
 */
export const useAdvisorSignupForm = (): UseAdvisorSignupFormReturn => {
  const [formData, setFormData] = useState<AdvisorFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  /**
   * Handles form field changes for both regular inputs and checkboxes
   * 
   * @param e - The change event from form inputs
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  /**
   * Resets the form to initial values
   */
  const resetForm = () => {
    setFormData(initialFormData);
    setSubmitStatus(null);
  };

  /**
   * Handles form submission with validation and error handling
   * 
   * @param e - The form submit event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare data for Supabase submission
      const submissionData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        role: formData.role,
        interest: formData.interest,
        firm_size: formData.firmSize,
        content_package: formData.contentPackage,
        analysis_reports: formData.analysisReports,
        directory_listing: formData.directoryListing,
        community_events: formData.communityEvents,
        submitted_at: new Date().toISOString()
      };

      console.log('Submitting advisor signup data:', submissionData); // Debug log

      const { error } = await supabase
        .from('advisor_signups')
        .insert([submissionData]);

      if (error) throw error;
      
      setSubmitStatus({
        success: true,
        message: 'Welcome to the Agent AI Community! Check your email for next steps.'
      });
      
      // Reset form on successful submission
      resetForm();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your information. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetForm
  };
};
