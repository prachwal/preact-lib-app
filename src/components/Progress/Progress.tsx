export type ProgressVariant = 'linear' | 'circular';
export type ProgressSize = 'sm' | 'md' | 'lg';
export type ProgressColor = 'primary' | 'success' | 'warning' | 'error' | 'info';

export interface ProgressProps {
  value?: number;
  max?: number;
  variant?: ProgressVariant;
  size?: ProgressSize;
  color?: ProgressColor;
  indeterminate?: boolean;
  showLabel?: boolean;
  className?: string;
  label?: string;
}

export const Progress = ({ 
  value = 0,
  max = 100,
  variant = 'linear',
  size = 'md',
  color = 'primary',
  indeterminate = false,
  showLabel = false,
  className = '',
  label
}: ProgressProps) => {
  const baseClass = 'progress';
  const variantClass = variant === 'circular' ? 'progress-circular' : 'progress-linear';
  const sizeClass = size !== 'md' ? `progress-${size}` : '';
  const colorClass = color !== 'primary' ? `progress-${color}` : '';
  const indeterminateClass = indeterminate ? 'progress-indeterminate' : '';
  
  const classes = [baseClass, variantClass, sizeClass, colorClass, indeterminateClass, className]
    .filter(Boolean)
    .join(' ');

  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const displayLabel = label || `${Math.round(percentage)}%`;

  if (variant === 'circular') {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className={classes} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
        <svg className="progress-svg" width="100" height="100" viewBox="0 0 100 100">
          <circle className="progress-track" cx="50" cy="50" r={radius} />
          {!indeterminate && (
            <circle 
              className="progress-fill" 
              cx="50" 
              cy="50" 
              r={radius}
              style={{ 
                strokeDasharray: circumference,
                strokeDashoffset: offset 
              }}
            />
          )}
        </svg>
        {showLabel && !indeterminate && (
          <span className="progress-label">{displayLabel}</span>
        )}
      </div>
    );
  }

  return (
    <div className={classes} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
      <div className="progress-track">
        <div 
          className="progress-fill" 
          style={{ width: indeterminate ? undefined : `${percentage}%` }}
        />
      </div>
      {showLabel && !indeterminate && (
        <span className="progress-label">{displayLabel}</span>
      )}
    </div>
  );
};

export default Progress;
