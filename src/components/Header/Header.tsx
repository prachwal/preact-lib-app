import type { HTMLAttributes } from 'preact/compat';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Header component - Layout category
 */
export const Header = ({ className = '', children, ...props }: HeaderProps) => {
  const baseClass = 'header';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Header;
