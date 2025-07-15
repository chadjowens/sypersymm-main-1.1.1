import React from 'react';
import { useThemeStore } from '../../store/themeStore';

export const Hero: React.FC = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <h1 className={`text-5xl md:text-6xl font-bold mb-6 hero-header`}>
          Super-Powering Digital Experiences //
          <span> Automating Business Impact</span>
        </h1>
        <p className={`text-xl md:text-2xl mb-8 ${
          isDarkMode ? 'text-gray-100' : 'text-gray-600'
        }`}>
          We combine cutting-edge AI technology with expert development
          to create innovative solutions for your business
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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