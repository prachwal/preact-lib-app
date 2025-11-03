import type { HTMLAttributes } from 'preact/compat';

export interface PricingCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * PricingCard component - Special category
 */
export const PricingCard = ({ className = '', children, ...props }: PricingCardProps) => {
  const baseClass = 'pricing';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default PricingCard;
