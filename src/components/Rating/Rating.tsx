import type { HTMLAttributes } from 'preact/compat';

export interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Rating component - Social category
 */
export const Rating = ({ className = '', children, ...props }: RatingProps) => {
  const baseClass = 'rating';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Rating;
