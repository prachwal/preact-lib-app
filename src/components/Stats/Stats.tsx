import type { HTMLAttributes } from 'preact/compat';

export interface StatsProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Stats component - Special category
 */
export const Stats = ({ className = '', children, ...props }: StatsProps) => {
  const baseClass = 'stats';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Stats;
