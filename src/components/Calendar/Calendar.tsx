import type { HTMLAttributes } from 'preact/compat';

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Calendar component - Special category
 */
export const Calendar = ({ className = '', children, ...props }: CalendarProps) => {
  const baseClass = 'calendar';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Calendar;
