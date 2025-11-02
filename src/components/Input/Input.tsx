import type { InputHTMLAttributes } from 'preact';

export type InputVariant = 'default' | 'filled' | 'outlined' | 'underlined';
export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type InputState = 'default' | 'error' | 'success' | 'warning';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  size?: InputSize;
  state?: InputState;
  label?: string;
  helperText?: string;
  errorText?: string;
  successText?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  showClearButton?: boolean;
  characterCounter?: boolean;
  maxLength?: number;
  floatingLabel?: boolean;
}

export const Input = ({
  variant = 'default',
  size = 'md',
  state = 'default',
  label,
  helperText,
  errorText,
  successText,
  prefixIcon,
  suffixIcon,
  showClearButton = false,
  characterCounter = false,
  maxLength,
  floatingLabel = false,
  className = '',
  disabled = false,
  type = 'text',
  value,
  ...props
}: InputProps) => {
  const baseClass = 'input';
  const variantClass = variant !== 'default' ? `input-${variant}` : '';
  const sizeClass = size !== 'md' ? `input-${size}` : '';
  const stateClass = state !== 'default' ? `input-${state}` : '';
  const disabledClass = disabled ? 'input-disabled' : '';
  const floatingClass = floatingLabel ? 'input-floating' : '';

  const containerClasses = [
    'input-container',
    variantClass ? `input-container-${variant}` : '',
    sizeClass ? `input-container-${size}` : '',
    stateClass ? `input-container-${state}` : '',
    disabledClass ? 'input-container-disabled' : '',
    floatingClass ? 'input-container-floating' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inputClasses = [baseClass, variantClass, sizeClass, stateClass, disabledClass]
    .filter(Boolean)
    .join(' ');

  const currentMessage = errorText || successText || helperText;
  const showCounter = characterCounter && maxLength;
  const currentLength = typeof value === 'string' ? value.length : 0;

  return (
    <div className={containerClasses}>
      {label && !floatingLabel && (
        <label className="input-label">
          {label}
          {props.required && <span className="input-required">*</span>}
        </label>
      )}
      <div className="input-wrapper">
        {prefixIcon && <span className="input-icon input-icon-prefix">{prefixIcon}</span>}
        <input
          type={type}
          className={inputClasses}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          {...props}
        />
        {floatingLabel && label && (
          <label className="input-label input-label-floating">
            {label}
            {props.required && <span className="input-required">*</span>}
          </label>
        )}
        {suffixIcon && <span className="input-icon input-icon-suffix">{suffixIcon}</span>}
        {showClearButton && value && (
          <button type="button" className="input-clear" aria-label="Clear input">
            ×
          </button>
        )}
      </div>
      {(currentMessage || showCounter) && (
        <div className="input-footer">
          {currentMessage && <span className="input-message">{currentMessage}</span>}
          {showCounter && (
            <span className="input-counter">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
