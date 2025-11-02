export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerVariant = 'circular' | 'dots' | 'pulse';

export interface SpinnerProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  className?: string;
  label?: string;
}

export const Spinner = ({ 
  size = 'md',
  variant = 'circular',
  className = '',
  label = 'Loading...'
}: SpinnerProps) => {
  const baseClass = 'spinner';
  const sizeClass = size !== 'md' ? `spinner-${size}` : '';
  const variantClass = variant !== 'circular' ? `spinner-${variant}` : '';
  
  const classes = [baseClass, sizeClass, variantClass, className]
    .filter(Boolean)
    .join(' ');

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <>
            <span class="spinner-dot" />
            <span class="spinner-dot" />
            <span class="spinner-dot" />
          </>
        );
      case 'pulse':
        return <span class="spinner-pulse" />;
      default:
        return <span class="spinner-circle" />;
    }
  };

  return (
    <div className={classes} role="status" aria-label={label}>
      {renderSpinner()}
      <span class="sr-only">{label}</span>
    </div>
  );
};

export default Spinner;
