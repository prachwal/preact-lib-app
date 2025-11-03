import type { HTMLAttributes } from 'preact/compat';

export interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Image component - Media category
 */
export const Image = ({ className = '', children, ...props }: ImageProps) => {
  const baseClass = 'image';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Image;
