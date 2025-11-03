import type { HTMLAttributes } from 'preact/compat';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'fluid';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Max-width constraint */
  size?: ContainerSize;
  /** Remove horizontal padding */
  noPadding?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Container component - Layout category
 * Centered container with max-width constraints and responsive padding
 */
export const Container = ({ 
  size,
  noPadding = false,
  className = '', 
  children, 
  ...props 
}: ContainerProps) => {
  const baseClass = 'container';
  const sizeClass = size ? `container-${size}` : '';
  const paddingClass = noPadding ? 'container-no-padding' : '';
  
  const classes = [baseClass, sizeClass, paddingClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Container;
