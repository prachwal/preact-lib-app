import type { HTMLAttributes } from 'preact/compat';

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Icon component - Media category
 */
export const Icon = ({ className = '', children, ...props }: IconProps) => {
  const baseClass = 'icon';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Icon;
