import type { HTMLAttributes } from 'preact/compat';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Container component - Layout category
 */
export const Container = ({ className = '', children, ...props }: ContainerProps) => {
  const baseClass = 'container';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Container;
