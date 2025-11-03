import type { HTMLAttributes } from 'preact/compat';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** Logo content */
  logo?: preact.ComponentChildren;
  /** Footer sections (columns) */
  sections?: preact.ComponentChildren;
  /** Social media links */
  social?: preact.ComponentChildren;
  /** Copyright text */
  copyright?: preact.ComponentChildren;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Footer component - Layout category
 * Page footer with multi-column layout, logo, links, social icons, and copyright
 */
export const Footer = ({ 
  logo,
  sections,
  social,
  copyright,
  className = '', 
  children, 
  ...props 
}: FooterProps) => {
  const baseClass = 'footer';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <footer className={classes} {...props}>
      <div className="footer-container">
        {logo && <div className="footer-logo">{logo}</div>}
        {sections && <div className="footer-grid">{sections}</div>}
        {social && <div className="footer-social">{social}</div>}
        {children}
        {copyright && <div className="footer-copyright">{copyright}</div>}
      </div>
    </footer>
  );
};

export default Footer;
