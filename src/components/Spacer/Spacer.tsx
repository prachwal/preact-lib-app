import type { HTMLAttributes } from 'preact/compat';

export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Spacer component - Layout category
 */
export const Spacer = ({ className = '', children, ...props }: SpacerProps) => {
  const baseClass = 'spacer';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Spacer;
