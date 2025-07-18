import React, { useState, useEffect } from 'react';
import { useThemeStore } from '../../store/themeStore';

export const Hero: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  const [animationState, setAnimationState] = useState({
    header: false,
    text: false,
    buttons: false
  });

  // Sequential fade-in animation with progressively longer delays
  useEffect(() => {
    // Start header animation after a short delay
    const headerTimer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, header: true }));
    }, 1000);
    
    // Start text animation
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
          We combine cutting-edge AI technology with expert development
          to create innovative solutions for your business
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