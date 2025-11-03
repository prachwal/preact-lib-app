import type { HTMLAttributes } from 'preact/compat';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  /** Size of the icon */
  size?: IconSize;
  /** Color variant */
  color?: IconColor;
  /** Whether to render as a button */
  asButton?: boolean;
  /** Whether to apply spin animation */
  spin?: boolean;
  /** Whether to apply pulse animation */
  pulse?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Icon component - Media category
 * Container for icons with size, color, and animation options
 */
export const Icon = ({ 
  size,
  color,
  asButton = false,
  spin = false,
  pulse = false,
  className = '', 
  children, 
  ...props 
}: IconProps) => {
  const baseClass = 'icon';
  const sizeClass = size ? `icon-${size}` : '';
  const colorClass = color ? `icon-${color}` : '';
  const buttonClass = asButton ? 'icon-button' : '';
  const spinClass = spin ? 'icon-spin' : '';
  const pulseClass = pulse ? 'icon-pulse' : '';
  
  const classes = [baseClass, sizeClass, colorClass, buttonClass, spinClass, pulseClass, className]
    .filter(Boolean)
    .join(' ');

  const Component = asButton ? 'button' : 'div';

  return (
    <Component className={classes} {...props as any}>
      {children}
    </Component>
  );
};

export default Icon;
