import type { TextareaHTMLAttributes } from 'preact';

export type TextareaVariant = 'default' | 'filled' | 'outlined';
export type TextareaSize = 'sm' | 'md' | 'lg';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextareaVariant;
  size?: TextareaSize;
  label?: string;
  helperText?: string;
  errorText?: string;
  successText?: string;
  characterCounter?: boolean;
  maxLength?: number;
  autoResize?: boolean;
  minHeight?: string;
  maxHeight?: string;
}

export const Textarea = ({
  variant = 'default',
  size = 'md',
  label,
  helperText,
  errorText,
  successText,
  characterCounter = false,
  maxLength,
  autoResize = false,
  minHeight,
  maxHeight,
  className = '',
  disabled = false,
  value,
  required,
  ...props
}: TextareaProps) => {
  const baseClass = 'textarea';
  const variantClass = variant !== 'default' ? `textarea-${variant}` : '';
  const sizeClass = size !== 'md' ? `textarea-${size}` : '';
  const errorClass = errorText ? 'textarea-error' : '';
  const successClass = successText ? 'textarea-success' : '';
  const disabledClass = disabled ? 'textarea-disabled' : '';
  const autoResizeClass = autoResize ? 'textarea-auto-resize' : '';

  const containerClasses = [
    'textarea-container',
    variantClass ? `textarea-container-${variant}` : '',
    sizeClass ? `textarea-container-${size}` : '',
    errorClass ? 'textarea-container-error' : '',
    successClass ? 'textarea-container-success' : '',
    disabledClass ? 'textarea-container-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const textareaClasses = [
    baseClass,
    variantClass,
    sizeClass,
    errorClass,
    successClass,
    disabledClass,
    autoResizeClass,
  ]
    .filter(Boolean)
    .join(' ');

  const currentMessage = errorText || successText || helperText;
  const showCounter = characterCounter && maxLength;
  const currentLength = typeof value === 'string' ? value.length : 0;

  const style: any = {};
  if (minHeight) style.minHeight = minHeight;
  if (maxHeight) style.maxHeight = maxHeight;

  return (
    <div className={containerClasses}>
      {label && (
        <label className="textarea-label">
          {label}
          {required && <span className="textarea-required">*</span>}
        </label>
      )}
      <textarea
        className={textareaClasses}
        disabled={disabled}
        maxLength={maxLength}
        value={value}
        required={required}
        style={style}
        {...props}
      />
      {(currentMessage || showCounter) && (
        <div className="textarea-footer">
          {currentMessage && <span className="textarea-message">{currentMessage}</span>}
          {showCounter && (
            <span className="textarea-counter">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Textarea;
