import type { HTMLAttributes } from 'preact/compat';

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Timeline component - Special category
 */
export const Timeline = ({ className = '', children, ...props }: TimelineProps) => {
  const baseClass = 'timeline';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Timeline;
