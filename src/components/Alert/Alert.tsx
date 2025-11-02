import type { ComponentChildren } from 'preact';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: ComponentChildren;
  onClose?: () => void;
  className?: string;
}

export const Alert = ({ 
  variant = 'info', 
  title, 
  children, 
  onClose,
  className = '' 
}: AlertProps) => {
  const baseClass = 'alert';
  const variantClass = `alert-${variant}`;
  
  const classes = [baseClass, variantClass, className]
    .filter(Boolean)
    .join(' ');

  const icons = {
    info: '●',
    success: '✓',
    warning: '⚠',
    error: '✕'
  };

  return (
    <div className={classes} role="alert">
      <div class="alert-icon">{icons[variant]}</div>
      <div class="alert-content">
        {title && <div class="alert-title">{title}</div>}
        <div class="alert-message">{children}</div>
      </div>
      {onClose && (
        <button 
          class="alert-close" 
          onClick={onClose}
          aria-label="Close alert"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Alert;
