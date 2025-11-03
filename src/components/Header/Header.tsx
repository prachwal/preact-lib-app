import { useState, useEffect } from 'preact/hooks';
import type { HTMLAttributes } from 'preact/compat';

export type HeaderPosition = 'static' | 'fixed' | 'sticky';
export type HeaderSize = 'sm' | 'md' | 'lg';

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /** Position variant */
  position?: HeaderPosition;
  /** Height size variant */
  size?: HeaderSize;
  /** Auto-hide on scroll down */
  scrollHide?: boolean;
  /** Logo content */
  logo?: preact.ComponentChildren;
  /** Navigation content */
  nav?: preact.ComponentChildren;
  /** Actions content (search, user menu, etc.) */
  actions?: preact.ComponentChildren;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Header component - Layout category
 * Page header with logo, navigation, and actions
 */
export const Header = ({ 
  position,
  size,
  scrollHide = false,
  logo,
  nav,
  actions,
  className = '', 
  children, 
  ...props 
}: HeaderProps) => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!scrollHide) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollHide, lastScrollY]);

  const baseClass = 'header';
  const positionClass = position ? `header-${position}` : '';
  const sizeClass = size ? `header-${size}` : '';
  const scrollHideClass = scrollHide ? 'header-scroll-hide' : '';
  const hiddenClass = isHidden ? 'header-hidden' : '';
  
  const classes = [baseClass, positionClass, sizeClass, scrollHideClass, hiddenClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classes} {...props}>
      {logo && <div className="header-logo">{logo}</div>}
      {nav && <nav className="header-nav">{nav}</nav>}
      {actions && <div className="header-actions">{actions}</div>}
      {children}
    </header>
  );
};

export default Header;
