import type { HTMLAttributes } from 'preact/compat';

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Footer component - Layout category
 */
export const Footer = ({ className = '', children, ...props }: FooterProps) => {
  const baseClass = 'footer';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Footer;
