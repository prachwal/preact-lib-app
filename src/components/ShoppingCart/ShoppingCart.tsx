import type { HTMLAttributes } from 'preact/compat';

export interface ShoppingCartProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * ShoppingCart component - E-commerce category
 */
export const ShoppingCart = ({ className = '', children, ...props }: ShoppingCartProps) => {
  const baseClass = 'shopping-cart';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default ShoppingCart;
