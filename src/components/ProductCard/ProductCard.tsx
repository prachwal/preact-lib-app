import type { HTMLAttributes } from 'preact/compat';

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * ProductCard component - E-commerce category
 */
export const ProductCard = ({ className = '', children, ...props }: ProductCardProps) => {
  const baseClass = 'product-card';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default ProductCard;
