import type { InputHTMLAttributes } from 'preact';

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: SwitchSize;
  label?: string;
  onLabel?: string;
  offLabel?: string;
}

export const Switch = ({
  size = 'md',
  label,
  onLabel,
  offLabel,
  className = '',
  disabled = false,
  checked,
  ...props
}: SwitchProps) => {
  const baseClass = 'switch';
  const sizeClass = size !== 'md' ? `switch-${size}` : '';
  const disabledClass = disabled ? 'switch-disabled' : '';

  const containerClasses = [
    'switch-container',
    sizeClass ? `switch-container-${size}` : '',
    disabledClass ? 'switch-container-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const switchClasses = [baseClass, sizeClass, disabledClass].filter(Boolean).join(' ');

  return (
    <label className={containerClasses}>
      <input
        type="checkbox"
        role="switch"
        className={switchClasses}
        disabled={disabled}
        checked={checked}
        {...props}
      />
      <span className="switch-slider">
        <span className="switch-thumb" />
        {(onLabel || offLabel) && (
          <span className="switch-labels">
            {onLabel && <span className="switch-label-on">{onLabel}</span>}
            {offLabel && <span className="switch-label-off">{offLabel}</span>}
          </span>
        )}
      </span>
      {label && <span className="switch-label">{label}</span>}
    </label>
  );
};

export default Switch;
