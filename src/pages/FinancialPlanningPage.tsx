import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { useThemeStore } from '../store/themeStore';
import { SimpleNavbar } from '../layouts/core/SimpleNavbar';
import { Background } from '../layouts/core/Background';

// Import slide components directly
import Slide1 from '../components/financial-planning/slides/Slide1';
import Slide2 from '../components/financial-planning/slides/Slide2';
import Slide3 from '../components/financial-planning/slides/Slide3';
import Slide4 from '../components/financial-planning/slides/Slide4';
import Slide5 from '../components/financial-planning/slides/Slide5';
import Slide6 from '../components/financial-planning/slides/Slide6';
import Slide7 from '../components/financial-planning/slides/Slide7';
import Slide8 from '../components/financial-planning/slides/Slide8';
import Slide9 from '../components/financial-planning/slides/Slide9';
import Slide10 from '../components/financial-planning/slides/Slide10';
import Slide11 from '../components/financial-planning/slides/Slide11';
import Slide12 from '../components/financial-planning/slides/Slide12';
import Slide13 from '../components/financial-planning/slides/Slide13';

// Import styles
import '../components/financial-planning/styles/SlideStyles.css';
// Ensure this is the only SlideStyles.css being imported

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
  totalSlides: 13,
  goToNextSlide: () => {},
  goToPrevSlide: () => {},
  goToSlide: () => {},
});

// Custom hook to use the slide context
const useSlideContext = () => useContext(SlideContext);

/**
 * NavigationControls component
 * 
 * Provides UI controls for navigating between slides
 * Includes slide indicators and next/previous buttons
 * 
 * @returns {JSX.Element} The rendered NavigationControls component
 */
const NavigationControls: React.FC = () => {
  const { currentSlide, totalSlides, goToPrevSlide, goToNextSlide, goToSlide } = useSlideContext();
  
  return (
    <div className="navigation-controls">
      <div className="slide-indicators">
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={i}
            className={`slide-indicator ${currentSlide === i + 1 ? 'active' : ''}`}
            onClick={() => goToSlide(i + 1)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={currentSlide === i + 1}
          />
        ))}
      </div>
      
      <div className="navigation-buttons">
        <button
          className="prev-button"
          onClick={goToPrevSlide}
          disabled={currentSlide === 1}
          aria-label="Previous slide"
        >
          ←
        </button>
        
        <div className="slide-counter">
          {currentSlide} / {totalSlides}
        </div>
        
        <button
          className="next-button"
          onClick={goToNextSlide}
          disabled={currentSlide === totalSlides}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </div>
  );
};

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
  const totalSlides = 13; // Updated for Slide13
  
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
      case 4:
        return <Slide4 />;
      case 5:
        return <Slide5 />;
      case 6:
        return <Slide6 />;
      case 7:
        return <Slide7 />;
      case 8:
        return <Slide8 />;
      case 9:
        return <Slide9 />;
      case 10:
        return <Slide10 />;
      case 11:
        return <Slide11 />;
      case 12:
        return <Slide12 />;
      case 13:
        return <Slide13 />;
      default:
        return <Slide1 />;
    }
  };
  
  return (
    <SlideContext.Provider value={contextValue}>
      <section className="flex flex-col items-center justify-center px-4">
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

/**
 * FinancialPlanningPage component
 * 
 * A redesigned page for displaying the financial planning interactive presentation
 * Uses a modular approach with separate components for slides and navigation
 * Implements a cleaner state management and navigation system
 * 
 * @returns {JSX.Element} The rendered FinancialPlanningPage component
 */
const FinancialPlanningPage: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  
  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'light bg-gray-50'}`}>
      <Background />
      <div className="relative">
        <SimpleNavbar />
        <main className="pt-4"> {/* Minimal padding for proper spacing */}
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 hero-header">Financial Planning</h1>
            <SlideContainer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default FinancialPlanningPage;
