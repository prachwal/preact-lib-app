import { useEffect } from 'preact/hooks';
import type { HTMLAttributes } from 'preact/compat';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'sm' | 'md' | 'lg' | 'full';

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether the drawer is open */
  open?: boolean;
  /** Position of the drawer */
  position?: DrawerPosition;
  /** Size of the drawer */
  size?: DrawerSize;
  /** Whether to show backdrop */
  showBackdrop?: boolean;
  /** Callback when drawer should close */
  onClose?: () => void;
  /** Drawer header content */
  header?: preact.ComponentChildren;
  /** Drawer footer content */
  footer?: preact.ComponentChildren;
  /** Whether to show close button */
  showCloseButton?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Drawer component - Overlay category
 * Slide-in panel from the side, top, or bottom with header/body/footer structure
 */
export const Drawer = ({
  open = false,
  position = 'right',
  size = 'md',
  showBackdrop = true,
  onClose,
  header,
  footer,
  showCloseButton = true,
  className = '',
  children,
  ...props
}: DrawerProps) => {
  const baseClass = 'drawer';
  const positionClass = `drawer-${position}`;
  const sizeClass = `drawer-${size}`;
  const openClass = open ? 'drawer-open' : '';

  const classes = [baseClass, positionClass, sizeClass, openClass, className]
    .filter(Boolean)
    .join(' ');

  // Handle Escape key to close drawer
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open && onClose) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  if (!open && !openClass) {
    return null;
  }

  return (
    <>
      {showBackdrop && open && (
        <div
          className="drawer-backdrop"
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      )}
      <div
        className={classes}
        role="dialog"
        aria-modal="true"
        {...props}
      >
        {(header || showCloseButton) && (
          <div className="drawer-header">
            {header && <div className="drawer-header-content">{header}</div>}
            {showCloseButton && (
              <button
                className="drawer-close"
                onClick={onClose}
                aria-label="Close drawer"
                type="button"
              >
                ✕
              </button>
            )}
          </div>
        )}

        <div className="drawer-body">{children}</div>

        {footer && <div className="drawer-footer">{footer}</div>}
      </div>
    </>
  );
};

export default Drawer;
