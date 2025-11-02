import type { SelectHTMLAttributes } from 'preact';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  size?: SelectSize;
  label?: string;
  helperText?: string;
  errorText?: string;
  successText?: string;
  options?: Array<{ value: string; label: string; disabled?: boolean }>;
}

export const Select = ({
  size = 'md',
  label,
  helperText,
  errorText,
  successText,
  options = [],
  className = '',
  disabled = false,
  required,
  children,
  ...props
}: SelectProps) => {
  const baseClass = 'select';
  const sizeClass = size !== 'md' ? `select-${size}` : '';
  const errorClass = errorText ? 'select-error' : '';
  const successClass = successText ? 'select-success' : '';
  const disabledClass = disabled ? 'select-disabled' : '';

  const containerClasses = [
    'select-container',
    sizeClass ? `select-container-${size}` : '',
    errorClass ? 'select-container-error' : '',
    successClass ? 'select-container-success' : '',
    disabledClass ? 'select-container-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const selectClasses = [baseClass, sizeClass, errorClass, successClass, disabledClass]
    .filter(Boolean)
    .join(' ');

  const currentMessage = errorText || successText || helperText;

  return (
    <div className={containerClasses}>
      {label && (
        <label className="select-label">
          {label}
          {required && <span className="select-required">*</span>}
        </label>
      )}
      <div className="select-wrapper">
        <select className={selectClasses} disabled={disabled} required={required} {...props}>
          {children ||
            options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
        </select>
        <span className="select-arrow" aria-hidden="true">
          ▼
        </span>
      </div>
      {currentMessage && <span className="select-message">{currentMessage}</span>}
    </div>
  );
};

export default Select;
