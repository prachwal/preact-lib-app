import type { HTMLAttributes } from 'preact/compat';

export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type SpacerResponsiveSize = 'md-lg' | 'md-xl';

export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  /** Spacing size */
  size?: SpacerSize;
  /** Responsive spacing (medium breakpoint and up) */
  responsiveSize?: SpacerResponsiveSize;
  /** Render as a divider line */
  divider?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Spacer component - Layout category
 * Vertical spacing utility with responsive variants
 */
export const Spacer = ({ 
  size = 'md',
  responsiveSize,
  divider = false,
  className = '', 
  children, 
  ...props 
}: SpacerProps) => {
  const baseClass = 'spacer';
  const sizeClass = size ? `spacer-${size}` : '';
  const responsiveClass = responsiveSize ? `spacer-${responsiveSize}` : '';
  const dividerClass = divider ? 'spacer-divider' : '';
  
  const classes = [baseClass, sizeClass, responsiveClass, dividerClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Spacer;
