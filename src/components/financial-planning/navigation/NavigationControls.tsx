import React from 'react';
import { useSlideContext } from '../SlideContainer';

/**
 * NavigationControls component
 * 
 * Provides UI controls for navigating between slides
 * Includes slide indicators and next/previous buttons
 * Uses the SlideContext to access navigation functions and state
 * 
 * @returns {JSX.Element} The rendered NavigationControls component
 */
const NavigationControls: React.FC = () => {
  const { currentSlide, totalSlides, goToNextSlide, goToPrevSlide, goToSlide } = useSlideContext();
  
  return (
    <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center space-y-6">
      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index + 1)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index + 1 ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4">
        <button 
          onClick={goToPrevSlide} 
          className={`flex items-center px-4 py-2 rounded-full shadow transition-colors ${
            currentSlide === 1 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
          disabled={currentSlide === 1}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Previous
        </button>
        
        <div className="text-sm font-medium text-gray-600 flex items-center">
          {currentSlide} / {totalSlides}
        </div>
        
        <button 
          onClick={goToNextSlide} 
          className={`flex items-center px-4 py-2 rounded-full shadow transition-colors ${
            currentSlide === totalSlides 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
          disabled={currentSlide === totalSlides}
          aria-label="Next slide"
        >
          Next
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavigationControls;
