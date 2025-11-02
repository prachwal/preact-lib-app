import type { InputHTMLAttributes } from 'preact';

export type CheckboxSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: CheckboxSize;
  label?: string;
  indeterminate?: boolean;
  error?: boolean;
}

export const Checkbox = ({
  size = 'md',
  label,
  indeterminate = false,
  error = false,
  className = '',
  disabled = false,
  checked,
  ...props
}: CheckboxProps) => {
  const baseClass = 'checkbox';
  const sizeClass = size !== 'md' ? `checkbox-${size}` : '';
  const errorClass = error ? 'checkbox-error' : '';
  const disabledClass = disabled ? 'checkbox-disabled' : '';
  const indeterminateClass = indeterminate ? 'checkbox-indeterminate' : '';

  const containerClasses = [
    'checkbox-container',
    sizeClass ? `checkbox-container-${size}` : '',
    errorClass ? 'checkbox-container-error' : '',
    disabledClass ? 'checkbox-container-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const checkboxClasses = [baseClass, sizeClass, errorClass, disabledClass, indeterminateClass]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={containerClasses}>
      <input
        type="checkbox"
        className={checkboxClasses}
        disabled={disabled}
        checked={checked}
        {...props}
      />
      <span className="checkbox-checkmark" />
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};

export default Checkbox;
