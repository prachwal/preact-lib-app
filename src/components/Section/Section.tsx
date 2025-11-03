import type { HTMLAttributes } from 'preact/compat';

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Section component - Layout category
 */
export const Section = ({ className = '', children, ...props }: SectionProps) => {
  const baseClass = 'section';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Section;
