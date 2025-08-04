import React, { useState, useEffect, useRef } from 'react';
import { useThemeStore } from '../../store/themeStore';
import AnimatedSeparator from '../ui/AnimatedSeparator';

/**
 * Agents component - Agent Teams Value Proposition Section
 * 
 * This component presents the core value proposition of Agent teams as intelligent
 * workforce extensions. It emphasizes how AI agents amplify human capabilities
 * and drive business efficiency.
 * 
 * Key Features:
 * - Full-screen section with scroll-based visibility
 * - Glassmorphism container design matching Services section
 * - Theme-aware styling for dark/light mode
 * - Scroll-triggered animations for engaging presentation
 * - Responsive design for mobile and desktop
 * - Highlighted key value propositions
 * 
 * Content Structure:
 * - Primary value proposition with highlighted key phrases
 * - Supporting explanation of benefits and outcomes
 * - Professional typography and spacing
 * 
 * @returns {JSX.Element} The rendered Agents section
 */
export const Agents: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  
  // Animation state for scroll-triggered effects
  const [animationState, setAnimationState] = useState({
    header: false,
    description: false,
    conclusion: false
  });
  
  // Refs for intersection observer
  const headerRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const conclusionRef = useRef<HTMLDivElement>(null);
  
  // Set up intersection observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // 20% of the element must be visible
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current) {
            setAnimationState(prev => ({ ...prev, header: true }));
          } else if (entry.target === descriptionRef.current) {
            setAnimationState(prev => ({ ...prev, description: true }));
          } else if (entry.target === conclusionRef.current) {
            setAnimationState(prev => ({ ...prev, conclusion: true }));
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe section elements
    if (headerRef.current) observer.observe(headerRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (conclusionRef.current) observer.observe(conclusionRef.current);
    
    // Clean up
    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      if (conclusionRef.current) observer.unobserve(conclusionRef.current);
    };
  }, []);

  return (
    <section id="agents" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            ref={headerRef}
            className={`text-4xl md:text-5xl section-header font-bold mb-4 transition-all transform duration-1000 ease-out ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            } ${
              animationState.header ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
            }`}
          >
            Agent Teams: <span className="font-light">Your Workforce Extension</span>
          </h2>
          <p 
            ref={descriptionRef}
            className={`text-xl md:text-2xl max-w-5xl mx-auto mb-8 font-light leading-relaxed transition-all transform duration-1000 ease-in ${
              isDarkMode ? 'text-gray-200' : 'text-gray-600'
            } ${
              animationState.description ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Agent teams are not simply tools; they are intelligent workforce extensions that amplify your team's abilities and drive unparalleled efficiency and effectiveness.
          </p>
        </div>
        
        {/* Numbered Highlights Section */}
        <p 
          className={`text-base md:text-lg max-w-5xl mx-auto mb-8 font-light leading-relaxed transition-all transform duration-1000 ease-in ${
            isDarkMode ? 'text-gray-200' : 'text-gray-600'
          } ${
            animationState.description ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <span className="section-header font-bold text-3xl mx-1 mr-2"> 1</span> 
          extensions of your workforce, 
          <span className="section-header font-bold text-3xl mx-1 mr-2"> 2</span> 
          amplify your team's abilities and 
          <span className="section-header font-bold text-3xl mx-1 mr-2"> 3</span> 
          drive unparalleled efficiency and effectiveness.
        </p>

        <p 
          className={`text-base md:text-lg max-w-5xl mx-auto mb-12 font-light leading-relaxed transition-all transform duration-1000 ease-in ${
            isDarkMode ? 'text-gray-200' : 'text-gray-600'
          } ${
            animationState.description ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          By offloading repetitive, data-intensive, and time-consuming tasks to these intelligent agents, your human teams are freed to focus on high-value, strategic initiatives, fostering innovation and deeper client relationships.
        </p>
        
        <AnimatedSeparator className="my-10" />
        
        <div ref={conclusionRef} className="transition-all transform duration-1000 ease-out"
             style={{ 
               opacity: animationState.conclusion ? 1 : 0,
               transform: animationState.conclusion ? 'translateY(0) scale(1)' : 'translateY(4px) scale(0.95)',
               transitionDelay: '800ms'
             }}>
          <h3 className={`text-3xl font-bold mb-8 section-header ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              This collaborative intelligence creates a force multiplier effect.
          </h3>
        
          <p className={`text-base md:text-lg max-w-5xl mx-auto mb-10 font-light leading-relaxed ${
            isDarkMode ? 'text-gray-200' : 'text-gray-600'
          }`}>
            Supersymmetry's agent teams enable you to achieve significantly greater outcomes with existing resources. This means accelerated sales cycles, improved customer satisfaction, reduced operational costs, and the ability to scale your operations without linear increases in headcount.
          </p>
          
          <p className={`text-base md:text-lg max-w-5xl mx-auto mb-10 font-light leading-relaxed ${
            isDarkMode ? 'text-gray-200' : 'text-gray-600'
          }`}>
            Our solutions integrate seamlessly with your existing infrastructure, ensuring a smooth transition and rapid time-to-value. Transforming Digital Operations for Accelerated Sales and Growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Agents;
