import type { HTMLAttributes } from 'preact/compat';

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Drawer component - Overlay category
 */
export const Drawer = ({ className = '', children, ...props }: DrawerProps) => {
  const baseClass = 'drawer';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Drawer;
