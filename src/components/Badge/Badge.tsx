import type { ComponentChildren } from 'preact';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children?: ComponentChildren;
  dot?: boolean;
  className?: string;
}

export const Badge = ({ 
  variant = 'default', 
  size = 'md',
  dot = false,
  children, 
  className = '' 
}: BadgeProps) => {
  const baseClass = 'badge';
  const variantClass = variant !== 'default' ? `badge-${variant}` : '';
  const sizeClass = size !== 'md' ? `badge-${size}` : '';
  const dotClass = dot ? 'badge-dot' : '';
  
  const classes = [baseClass, variantClass, sizeClass, dotClass, className]
    .filter(Boolean)
    .join(' ');

  if (dot) {
    return <span className={classes} />;
  }

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;
