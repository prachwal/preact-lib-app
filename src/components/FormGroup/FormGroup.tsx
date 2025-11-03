import type { HTMLAttributes } from 'preact';

export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
  successText?: string;
  required?: boolean;
  optional?: boolean;
}

export const FormGroup = ({
  label,
  helperText,
  errorText,
  successText,
  required = false,
  optional = false,
  className = '',
  children,
  ...props
}: FormGroupProps) => {
  const baseClass = 'form-group';
  const errorClass = errorText ? 'form-group-error' : '';
  const successClass = successText ? 'form-group-success' : '';

  const containerClasses = [baseClass, errorClass, successClass, className]
    .filter(Boolean)
    .join(' ');

  const currentMessage = errorText || successText || helperText;

  return (
    <div className={containerClasses} {...props}>
      {label && (
        <label className="form-group-label">
          {label}
          {required && <span className="form-group-required">*</span>}
          {optional && <span className="form-group-optional">(optional)</span>}
        </label>
      )}
      <div className="form-group-content">{children}</div>
      {currentMessage && (
        <span
          className={`form-group-message ${errorText ? 'form-group-message-error' : ''} ${successText ? 'form-group-message-success' : ''}`}
        >
          {currentMessage}
        </span>
      )}
    </div>
  );
};

export default FormGroup;
