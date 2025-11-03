import { useState } from 'preact/hooks';
import type { HTMLAttributes } from 'preact/compat';

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  /** Show navigation arrows */
  showArrows?: boolean;
  /** Show dot indicators */
  showDots?: boolean;
  /** Initial slide index */
  initialSlide?: number;
  /** Auto-play interval in milliseconds (0 to disable) */
  autoplay?: number;
  /** Slides to show */
  slides?: preact.ComponentChildren[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * Carousel component - Special category
 * Slideshow component with navigation arrows and dot indicators
 */
export const Carousel = ({ 
  showArrows = true,
  showDots = true,
  initialSlide = 0,
  autoplay = 0,
  slides = [],
  className = '', 
  children, 
  ...props 
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const slideCount = Array.isArray(slides) ? slides.length : 0;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  if (autoplay > 0) {
    setTimeout(nextSlide, autoplay);
  }

  const baseClass = 'carousel';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      <div 
        className="carousel-container" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slideCount > 0 ? (
          slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              {slide}
            </div>
          ))
        ) : (
          children
        )}
      </div>

      {showArrows && slideCount > 1 && (
        <>
          <button
            className="carousel-arrow carousel-arrow-prev"
            onClick={prevSlide}
            aria-label="Previous slide"
            type="button"
          >
            ‹
          </button>
          <button
            className="carousel-arrow carousel-arrow-next"
            onClick={nextSlide}
            aria-label="Next slide"
            type="button"
          >
            ›
          </button>
        </>
      )}

      {showDots && slideCount > 1 && (
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'carousel-dot-active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
