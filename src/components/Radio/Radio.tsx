import type { InputHTMLAttributes } from 'preact';

export type RadioSize = 'sm' | 'md' | 'lg';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: RadioSize;
  label?: string;
  error?: boolean;
}

export const Radio = ({
  size = 'md',
  label,
  error = false,
  className = '',
  disabled = false,
  checked,
  ...props
}: RadioProps) => {
  const baseClass = 'radio';
  const sizeClass = size !== 'md' ? `radio-${size}` : '';
  const errorClass = error ? 'radio-error' : '';
  const disabledClass = disabled ? 'radio-disabled' : '';

  const containerClasses = [
    'radio-container',
    sizeClass ? `radio-container-${size}` : '',
    errorClass ? 'radio-container-error' : '',
    disabledClass ? 'radio-container-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const radioClasses = [baseClass, sizeClass, errorClass, disabledClass].filter(Boolean).join(' ');

  return (
    <label className={containerClasses}>
      <input
        type="radio"
        className={radioClasses}
        disabled={disabled}
        checked={checked}
        {...props}
      />
      <span className="radio-mark" />
      {label && <span className="radio-label">{label}</span>}
    </label>
  );
};

export default Radio;
