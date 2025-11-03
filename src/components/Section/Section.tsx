import type { HTMLAttributes } from 'preact/compat';

export type SectionSize = 'sm' | 'md' | 'lg';
export type SectionBackground = 'primary' | 'gray';

export interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, 'size'> {
  /** Spacing size variant */
  size?: SectionSize;
  /** Background variant */
  background?: SectionBackground;
  /** Full width section */
  fullWidth?: boolean;
  /** Contained section with max-width */
  contained?: boolean;
  /** Add bottom border divider */
  divider?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Section component - Layout category
 * Semantic section with spacing, background, and container options
 */
export const Section = ({ 
  size,
  background,
  fullWidth = false,
  contained = false,
  divider = false,
  className = '', 
  children, 
  ...props 
}: SectionProps) => {
  const baseClass = 'section';
  const sizeClass = size ? `section-${size}` : '';
  const bgClass = background ? `section-bg-${background}` : '';
  const fullWidthClass = fullWidth ? 'section-full-width' : '';
  const containedClass = contained ? 'section-contained' : '';
  const dividerClass = divider ? 'section-divider' : '';
  
  const classes = [baseClass, sizeClass, bgClass, fullWidthClass, containedClass, dividerClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};

export default Section;
