import React, { useState, useEffect } from 'react';

// Import all slide components from barrel file
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9 } from '../deprecated/slides';
// Import shared slide styles from new financial-planning directory
import '../financial-planning/styles/SlideStyles.css';

/**
 * PresentationDeck component for displaying an interactive financial planning presentation
 * 
 * This component is designed to be accessed directly via URL without navigation links
 * It provides a full-screen container for embedding interactive presentation content
 * Uses individual slide components for better maintainability and code organization
 * 
 * @returns {JSX.Element} The rendered PresentationDeck component
 */
// Debug log to verify this module is being imported
console.log('PresentationDeck module loaded');

const PresentationDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 9;
  
  // Add useEffect for debugging
  useEffect(() => {
    console.log('PresentationDeck component mounted');
    console.log('Available slide components:', { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9 });
    
    return () => {
      console.log('PresentationDeck component unmounted');
    };
  }, []);
  
  // Enhanced navigation function with functional state update
  const goToNextSlide = () => {
    console.log('NAVIGATION: Next button clicked!');
    console.log('NAVIGATION: Current slide before update:', currentSlide);
    try {
      setCurrentSlide(prevSlide => {
        console.log('NAVIGATION: Inside setState callback, prevSlide:', prevSlide);
        if (prevSlide < totalSlides) {
          const nextSlide = prevSlide + 1;
          console.log('NAVIGATION: Setting slide to:', nextSlide);
          return nextSlide;
        }
        console.log('NAVIGATION: Already at last slide, not updating');
        return prevSlide;
      });
      console.log('NAVIGATION: State update called successfully');
    } catch (error) {
      console.error('NAVIGATION ERROR in goToNextSlide:', error);
    }
  };
  
  // Enhanced navigation function with functional state update
  const goToPrevSlide = () => {
    console.log('NAVIGATION: Previous button clicked!');
    console.log('NAVIGATION: Current slide before update:', currentSlide);
    try {
      setCurrentSlide(prevSlide => {
        console.log('NAVIGATION: Inside setState callback, prevSlide:', prevSlide);
        if (prevSlide > 1) {
          const newSlide = prevSlide - 1;
          console.log('NAVIGATION: Setting slide to:', newSlide);
          return newSlide;
        }
        console.log('NAVIGATION: Already at first slide, not updating');
        return prevSlide;
      });
      console.log('NAVIGATION: State update called successfully');
    } catch (error) {
      console.error('NAVIGATION ERROR in goToPrevSlide:', error);
    }
  };
  
  // Log when the component renders with the current slide
  console.log('PresentationDeck rendering with slide:', currentSlide);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      
      <div className="slide-container">
        <div className="content">
          {/* Render the appropriate slide component based on currentSlide */}
          {currentSlide === 1 && <Slide1 />}
          {currentSlide === 2 && <Slide2 />}
          {currentSlide === 3 && <Slide3 />}
          {currentSlide === 4 && <Slide4 />}
          {currentSlide === 5 && <Slide5 />}
          {currentSlide === 6 && <Slide6 />}
          {currentSlide === 7 && <Slide7 />}
          {currentSlide === 8 && <Slide8 />}
          {currentSlide === 9 && <Slide9 />}
        </div>
        
        {/* Enhanced Navigation Controls */}
        <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center space-y-6">
          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index + 1)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index + 1 ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4">
            <button 
              onClick={(e) => {
                console.log('BUTTON: Previous button DOM click event triggered', e.type);
                goToPrevSlide();
              }} 
              className={`flex items-center px-4 py-2 rounded-full shadow transition-colors ${currentSlide === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-purple-600 text-white hover:bg-purple-700'}`}
              disabled={currentSlide === 1}
              id="prev-slide-button"
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
              onClick={(e) => {
                console.log('BUTTON: Next button DOM click event triggered', e.type);
                goToNextSlide();
              }} 
              className={`flex items-center px-4 py-2 rounded-full shadow transition-colors ${currentSlide === totalSlides ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-purple-600 text-white hover:bg-purple-700'}`}
              disabled={currentSlide === totalSlides}
              id="next-slide-button"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationDeck;
