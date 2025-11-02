import type { ComponentChildren } from 'preact';

export type ChipVariant = 'filled' | 'outlined' | 'soft';
export type ChipColor = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type ChipSize = 'sm' | 'md' | 'lg';

export interface ChipProps {
  variant?: ChipVariant;
  color?: ChipColor;
  size?: ChipSize;
  children: ComponentChildren;
  onClose?: () => void;
  onClick?: () => void;
  className?: string;
  selected?: boolean;
  disabled?: boolean;
}

export const Chip = ({ 
  variant = 'filled',
  color = 'default',
  size = 'md',
  children,
  onClose,
  onClick,
  className = '',
  selected = false,
  disabled = false
}: ChipProps) => {
  const baseClass = 'chip';
  const variantClass = variant !== 'filled' ? `chip-${variant}` : '';
  const colorClass = color !== 'default' ? `chip-${color}` : '';
  const sizeClass = size !== 'md' ? `chip-${size}` : '';
  const selectedClass = selected ? 'chip-selected' : '';
  const clickableClass = onClick ? 'chip-clickable' : '';
  const disabledClass = disabled ? 'chip-disabled' : '';
  
  const classes = [baseClass, variantClass, colorClass, sizeClass, selectedClass, clickableClass, disabledClass, className]
    .filter(Boolean)
    .join(' ');

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleClose = (e: Event) => {
    e.stopPropagation();
    if (!disabled && onClose) {
      onClose();
    }
  };

  return (
    <div 
      className={classes}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      aria-disabled={disabled}
    >
      <span class="chip-label">{children}</span>
      {onClose && (
        <button
          class="chip-close"
          onClick={handleClose}
          aria-label="Remove"
          disabled={disabled}
          type="button"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Chip;
