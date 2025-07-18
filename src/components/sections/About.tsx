import React, { useEffect, useRef, useState } from 'react';
import { useThemeStore } from '../../store/themeStore';
import { UserSearch, LineChart, MessageCircle, Workflow, Database, BarChart3 } from 'lucide-react';

import AnimatedSeparator from '../ui/AnimatedSeparator';

export const About: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  
  // Animation states for different sections
  const [animationState, setAnimationState] = useState({
    header: false,
    intro: false,
    features: false,
    description: false,
    conclusion: false
  });
  
  // Refs for sections to observe
  const headerRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const conclusionRef = useRef<HTMLDivElement>(null);
  
  // Set up intersection observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.2 // 20% of the element must be visible
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Determine which element came into view
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
            className={`text-4xl md:text-5xl section-header mb-4 transition-all transform duration-1000 ease-out ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            } ${
              animationState.header ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
            }`}
          >
            Hello, we're Supersymmetry
          </h2>
          <p 
            ref={introRef}
            className={`text-base md:text-lg max-w-5xl mx-auto mb-8 font-light leading-relaxed transition-all transform duration-1000 ease-in ${
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
              <div className="flex items-start">
                <UserSearch className="gradient-icon mr-4 mt-1 flex-shrink-0" size={32} />
                <span className="text-xl font-medium">Identifying high-potential leads</span>
              </div>
              
              <div className="flex items-start">
                <LineChart className="gradient-icon mr-4 mt-1 flex-shrink-0" size={32} />
                <span className="text-xl font-medium">Optimizing sales funnels</span>
              </div>
              
              <div className="flex items-start">
                <MessageCircle className="gradient-icon mr-4 mt-1 flex-shrink-0" size={32} />
                <span className="text-xl font-medium">Personalizing customer interactions</span>
              </div>
              
              <div className="flex items-start">
                <Workflow className="gradient-icon mr-4 mt-1 flex-shrink-0" size={32} />
                <span className="text-xl font-medium">Automating business processes</span>
              </div>
              
              <div className="flex items-start">
                <Database className="gradient-icon mr-4 mt-1 flex-shrink-0" size={32} />
                <div className="text-xl font-medium text-left">
                  Connecting employees to<br />
                  self-improving knowledgebases
                </div>
              </div>
              
              <div className="flex items-start">
                <BarChart3 className="gradient-icon mr-4 mt-1 flex-shrink-0" size={32} />
                <div className="text-xl font-medium text-left">
                  Ongoing optimization with<br />
                  real-time analytics
                </div>
              </div>
            </div>
          </div>
          
          <p 
            ref={descriptionRef}
            className={`text-base md:text-lg max-w-5xl mx-auto mb-8 font-light leading-relaxed transition-all transform duration-1000 ease-in ${
              isDarkMode ? 'text-gray-200' : 'text-gray-600'
            } ${
              animationState.description ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            These agent teams are not simply tools; they are
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
        {/* Profile tiles removed as requested */}
      </div>
    </section>
  );
};