import type { HTMLAttributes } from 'preact/compat';

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Carousel component - Special category
 */
export const Carousel = ({ className = '', children, ...props }: CarouselProps) => {
  const baseClass = 'carousel';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Carousel;
