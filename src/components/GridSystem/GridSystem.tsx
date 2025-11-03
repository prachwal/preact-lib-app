import type { HTMLAttributes } from 'preact/compat';

export interface GridSystemProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * GridSystem component - Layout category
 */
export const GridSystem = ({ className = '', children, ...props }: GridSystemProps) => {
  const baseClass = 'grid-system';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default GridSystem;
