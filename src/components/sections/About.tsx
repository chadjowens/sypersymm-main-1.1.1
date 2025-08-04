import React, { useEffect, useRef, useState } from 'react';
import { useThemeStore } from '../../store/themeStore';
import GradientIcon from '../advisor/ui/GradientIcon';

/**
 * About component - Main company introduction and capabilities overview
 * 
 * This component serves as the primary introduction to SyperSymmetry, showcasing
 * the company's specialization in AI agent teams and core business capabilities.
 * 
 * Features:
 * - Animated scroll-triggered content reveals
 * - Six key capability highlights with gradient icons
 * - Responsive grid layout for feature display
 * - Theme-aware styling (dark/light mode)
 * - Material Symbols icons with animated gradients
 * 
 * Content Structure:
 * 1. Company introduction and agent teams overview
 * 2. Six core capabilities grid:
 *    - Identifying high-potential leads
 *    - Optimizing sales funnels
 *    - Personalizing customer interactions
 *    - Automating business processes
 *    - Connecting to knowledgebases
 *    - Real-time analytics optimization
 * 
 * Animation System:
 * - Uses Intersection Observer API for scroll-triggered animations
 * - Staggered animation delays for smooth content reveals
 * - Transforms include opacity, scale, and translate effects
 * 
 * Icon Implementation:
 * - Material Symbols via GradientIcon component
 * - Consistent text-3xl sizing (30px)
 * - Animated blue-to-pink gradient effects
 * - Proper vertical centering with content
 * 
 * @returns {JSX.Element} The rendered About section component
 */
export const About: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  
  /**
   * Animation state management for scroll-triggered reveals
   * Each section has its own animation state to enable staggered animations
   * - header: Main "Hello, we're SUPER{SYMMETRY}" title
   * - intro: Company description paragraph
   * - features: Six capabilities grid with icons
   * - description: Additional descriptive content (if present)
   * - conclusion: Closing content (if present)
   */
  const [animationState, setAnimationState] = useState({
    header: false,     // Main title animation state
    intro: false,      // Introduction paragraph animation state
    features: false,   // Capabilities grid animation state
    description: false, // Additional description animation state
    conclusion: false   // Conclusion section animation state
  });
  
  /**
   * React refs for DOM elements to observe with Intersection Observer
   * These refs are attached to specific sections to trigger animations
   * when they come into viewport
   */
  const headerRef = useRef<HTMLHeadingElement>(null);      // Main title element
  const introRef = useRef<HTMLParagraphElement>(null);     // Intro paragraph element
  const featuresRef = useRef<HTMLDivElement>(null);       // Features grid container
  const descriptionRef = useRef<HTMLParagraphElement>(null); // Description element
  const conclusionRef = useRef<HTMLDivElement>(null);     // Conclusion element
  
  /**
   * Intersection Observer setup for scroll-triggered animations
   * Monitors when sections come into viewport and triggers their animations
   */
  useEffect(() => {
    /**
     * Observer configuration options
     * - root: null = use viewport as root
     * - rootMargin: '0px' = no margin around root
     * - threshold: 0.2 = trigger when 20% of element is visible
     */
    const observerOptions = {
      root: null,        // Use viewport as intersection root
      rootMargin: '0px', // No additional margin around viewport
      threshold: 0.2     // Trigger when 20% of element becomes visible
    };
    
    /**
     * Intersection Observer callback function
     * Called whenever an observed element enters or exits the viewport
     * 
     * @param {IntersectionObserverEntry[]} entries - Array of intersection entries
     */
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        // Only trigger animations when elements come into view
        if (entry.isIntersecting) {
          // Identify which specific element triggered the intersection
          // and update the corresponding animation state
          if (entry.target === headerRef.current) {
            setAnimationState(prev => ({ ...prev, header: true }));
          } else if (entry.target === introRef.current) {
            setAnimationState(prev => ({ ...prev, intro: true }));
          } else if (entry.target === featuresRef.current) {
            setAnimationState(prev => ({ ...prev, features: true }));
          } else if (entry.target === descriptionRef.current) {
            setAnimationState(prev => ({ ...prev, description: true }));
          } else if (entry.target === conclusionRef.current) {
            setAnimationState(prev => ({ ...prev, conclusion: true }));
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all section elements
    if (headerRef.current) observer.observe(headerRef.current);
    if (introRef.current) observer.observe(introRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (conclusionRef.current) observer.observe(conclusionRef.current);
    
    // Clean up
    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (introRef.current) observer.unobserve(introRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      if (conclusionRef.current) observer.unobserve(conclusionRef.current);
    };
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            ref={headerRef}
            className={`text-4xl md:text-5xl section-header font-bold mb-4 transition-all transform duration-1000 ease-out ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            } ${
              animationState.header ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
            }`}
          >
            Hello, we're <span className="font-light">SUPER{'{SYMMETRY}'}</span>
          </h2>
          <p 
            ref={introRef}
            className={`text-xl md:text-2xl max-w-5xl mx-auto mb-8 font-light leading-relaxed transition-all transform duration-1000 ease-in ${
              isDarkMode ? 'text-gray-200' : 'text-gray-600'
            } ${
              animationState.intro ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Supersymmetry specializes in designing and deploying bespoke <span className="font-bold section-header">agent teams</span> tailored to your specific business needs. Imagine a coordinated network of intelligent AI agents working tirelessly across your digital ecosystem:
          </p>
          
          <div 
            ref={featuresRef}
            className={`max-w-5xl mx-auto mb-12 transition-all transform duration-1000 ease-out ${
              isDarkMode ? 'text-gray-200' : 'text-gray-600'
            } ${
              animationState.features ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4 md:pl-12">
              <div className="flex items-center">
                <GradientIcon iconName="person_search" size="text-3xl" className="mr-4 flex-shrink-0" />
                <span className="text-xl font-medium">Identifying high-potential leads</span>
              </div>
              
              <div className="flex items-center">
                <GradientIcon iconName="trending_up" size="text-3xl" className="mr-4 flex-shrink-0" />
                <span className="text-xl font-medium">Optimizing sales funnels</span>
              </div>
              
              <div className="flex items-center">
                <GradientIcon iconName="chat" size="text-3xl" className="mr-4 flex-shrink-0" />
                <span className="text-xl font-medium">Personalizing customer interactions</span>
              </div>
              
              <div className="flex items-center">
                <GradientIcon iconName="workflow" size="text-3xl" className="mr-4 flex-shrink-0" />
                <span className="text-xl font-medium">Automating business processes</span>
              </div>
              
              <div className="flex items-center">
                <GradientIcon iconName="database" size="text-3xl" className="mr-4 flex-shrink-0" />
                <div className="text-xl font-medium text-left">
                  Connecting employees to<br />
                  self-improving knowledgebases
                </div>
              </div>
              
              <div className="flex items-center">
                <GradientIcon iconName="bar_chart" size="text-3xl" className="mr-4 flex-shrink-0" />
                <div className="text-xl font-medium text-left">
                  Ongoing optimization with<br />
                  real-time analytics
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* Profile tiles removed as requested */}
      </div>
    </section>
  );
};