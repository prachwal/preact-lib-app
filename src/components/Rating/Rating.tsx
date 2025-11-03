import { useState } from 'preact/hooks';
import type { HTMLAttributes } from 'preact/compat';

export type RatingSize = 'sm' | 'md' | 'lg';

export interface RatingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current rating value (0-5) */
  value?: number;
  /** Maximum rating (default 5) */
  max?: number;
  /** Allow half star ratings */
  allowHalf?: boolean;
  /** Interactive (clickable) rating */
  interactive?: boolean;
  /** Read-only mode */
  readonly?: boolean;
  /** Size variant */
  size?: RatingSize;
  /** Show review count */
  count?: number;
  /** Callback when rating changes */
  onChange?: (value: number) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Rating component - Social category
 * Star rating display with interactive and read-only modes
 */
export const Rating = ({ 
  value = 0,
  max = 5,
  allowHalf = false,
  interactive = false,
  readonly = false,
  size = 'md',
  count,
  onChange,
  className = '', 
  children, 
  ...props 
}: RatingProps) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  
  const handleClick = (starValue: number) => {
    if (!interactive || readonly) return;
    if (onChange) {
      onChange(starValue);
    }
  };

  const handleMouseEnter = (starValue: number) => {
    if (interactive && !readonly) {
      setHoverValue(starValue);
    }
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const displayValue = hoverValue !== null ? hoverValue : value;

  const baseClass = 'rating';
  const sizeClass = `rating-${size}`;
  const interactiveClass = interactive ? 'rating-interactive' : '';
  const readonlyClass = readonly ? 'rating-readonly' : '';
  const withCountClass = count !== undefined ? 'rating-with-count' : '';
  
  const classes = [baseClass, sizeClass, interactiveClass, readonlyClass, withCountClass, className]
    .filter(Boolean)
    .join(' ');

  const stars = [];
  for (let i = 1; i <= max; i++) {
    const filled = i <= displayValue;
    const halfFilled = allowHalf && i === Math.ceil(displayValue) && displayValue % 1 !== 0;
    
    stars.push(
      <span
        key={i}
        className={`rating-star ${filled ? 'rating-star-filled' : ''} ${halfFilled ? 'rating-star-half' : ''}`}
        onClick={() => handleClick(i)}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={handleMouseLeave}
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
      >
        {filled || halfFilled ? '★' : '☆'}
      </span>
    );
  }

  return (
    <div className={classes} {...props}>
      {stars}
      {count !== undefined && (
        <span className="rating-count">({count})</span>
      )}
      {children}
    </div>
  );
};

export default Rating;
