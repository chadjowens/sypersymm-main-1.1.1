import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import NavigationControls from './navigation/NavigationControls';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import './styles/SlideStyles.css';

// Define the slide context type
interface SlideContextType {
  currentSlide: number;
  totalSlides: number;
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
  goToSlide: (slideNumber: number) => void;
}

// Create context with default values
const SlideContext = createContext<SlideContextType>({
  currentSlide: 1,
  totalSlides: 3,
  goToNextSlide: () => {},
  goToPrevSlide: () => {},
  goToSlide: () => {},
});

// Custom hook to use the slide context
export const useSlideContext = () => useContext(SlideContext);

/**
 * SlideContainer component
 * 
 * Manages slide state and navigation for the financial planning presentation
 * Provides context for current slide position and navigation functions
 * Handles keyboard navigation and renders the appropriate slide
 * 
 * @returns {JSX.Element} The rendered SlideContainer component
 */
const SlideContainer: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3; // Update this when adding more slides
  
  // Navigation functions
  const goToNextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides));
  }, [totalSlides]);
  
  const goToPrevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 1));
  }, []);
  
  const goToSlide = useCallback((slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      setCurrentSlide(slideNumber);
    }
  }, [totalSlides]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goToPrevSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);
  
  // Create context value
  const contextValue = {
    currentSlide,
    totalSlides,
    goToNextSlide,
    goToPrevSlide,
    goToSlide
  };
  
  // Render the current slide
  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Slide1 />;
      case 2:
        return <Slide2 />;
      case 3:
        return <Slide3 />;
      default:
        return <Slide1 />;
    }
  };
  
  return (
    <SlideContext.Provider value={contextValue}>
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
        <div className="slide-container">
          <div className="content">
            {renderCurrentSlide()}
          </div>
          
          <NavigationControls />
        </div>
      </section>
    </SlideContext.Provider>
  );
};

export default SlideContainer;
