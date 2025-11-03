import type { HTMLAttributes } from 'preact/compat';

export interface TestimonialProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Testimonial component - Special category
 */
export const Testimonial = ({ className = '', children, ...props }: TestimonialProps) => {
  const baseClass = 'testimonial';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Testimonial;
