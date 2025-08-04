import React, { useState, useEffect } from 'react';
import { useThemeStore } from '../../store/themeStore';

/**
 * Hero component - Main landing section with company branding and call-to-action
 * 
 * This component serves as the primary landing area for the SyperSymmetry website,
 * featuring the company name, tagline, and main call-to-action buttons.
 * 
 * Features:
 * - Sequential fade-in animations with staggered timing
 * - Theme-aware styling (dark/light mode)
 * - Responsive typography and layout
 * - Call-to-action buttons for engagement
 * - Professional branding presentation
 * 
 * Animation System:
 * - Uses setTimeout-based sequential animations
 * - Three-stage animation sequence:
 *   1. Header/logo animation (1000ms delay)
 *   2. Descriptive text animation (2000ms delay)
 *   3. Call-to-action buttons animation (3000ms delay)
 * - Smooth opacity and transform transitions
 * 
 * Content Structure:
 * 1. Main company name with stylized branding
 * 2. Descriptive tagline about AI agent teams
 * 3. Call-to-action buttons for user engagement
 * 
 * Styling:
 * - Responsive text sizing (mobile to desktop)
 * - Theme-aware color schemes
 * - Professional typography hierarchy
 * - Centered layout with proper spacing
 * 
 * @returns {JSX.Element} The rendered Hero section component
 */
export const Hero: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  
  /**
   * Animation state management for sequential Hero section reveals
   * Each element animates in sequence to create a professional entrance effect
   * - header: Main company name and branding
   * - text: Descriptive tagline and value proposition
   * - buttons: Call-to-action buttons for user engagement
   */
  const [animationState, setAnimationState] = useState({
    header: false,  // Main title/logo animation state
    text: false,    // Descriptive text animation state
    buttons: false  // CTA buttons animation state
  });

  /**
   * Sequential fade-in animation setup with staggered timing
   * Creates a professional entrance effect by animating elements in sequence
   * rather than all at once for better visual impact
   */
  useEffect(() => {
    /**
     * Stage 1: Header/Logo Animation (1000ms delay)
     * Starts the animation sequence with the main company branding
     */
    const headerTimer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, header: true }));
    }, 1000);
    
    /**
     * Stage 2: Text Animation (2000ms delay)
     * Reveals the descriptive content after the header is established
     */
    const textTimer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, text: true }));
    }, 2000);
    
    // Start buttons animation
    const buttonsTimer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, buttons: true }));
    }, 2500);
    
    // Clean up timers
    return () => {
      clearTimeout(headerTimer);
      clearTimeout(textTimer);
      clearTimeout(buttonsTimer);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <h1 
          className={`text-5xl md:text-6xl font-bold mb-6 hero-header transition-all transform ease-out ${
            animationState.header ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
          }`}
          style={{ transitionDuration: '5000ms' }}
        >
          Super-Powering Digital Experiences //
          <span> Automating Business Impact</span>
        </h1>
        <p 
          className={`text-xl md:text-2xl mb-8 font-light transition-all transform ease-in ${
            animationState.text ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6'
          } ${
            isDarkMode ? 'text-gray-100' : 'text-gray-600'
          }`}
          style={{ transitionDuration: '2000ms' }}
        >
          We integrate advanced Agentic AI with your company's proven expertise to fuel sustainable business growth and transformation
        </p>
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all transform ease-linear ${
            animationState.buttons ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
          }`}
          style={{ transitionDuration: '2000ms' }}
        >
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="#services"
            className={`${
              isDarkMode
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            } px-8 py-3 rounded-lg text-lg font-medium transition-colors`}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};