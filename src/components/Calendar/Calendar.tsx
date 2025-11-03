import { useState } from 'preact/hooks';
import type { HTMLAttributes } from 'preact/compat';

export interface CalendarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Selected date */
  value?: Date;
  /** Callback when date is selected */
  onChange?: (date: Date) => void;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Disabled dates */
  disabledDates?: Date[];
  /** Range selection mode */
  rangeMode?: boolean;
  /** Selected range (for range mode) */
  rangeValue?: [Date | null, Date | null];
  /** Callback for range selection */
  onRangeChange?: (range: [Date | null, Date | null]) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Calendar component - Special category
 * Date picker calendar with day grid, navigation, and range selection
 */
export const Calendar = ({ 
  value,
  onChange,
  minDate,
  maxDate,
  disabledDates = [],
  rangeMode = false,
  rangeValue,
  onRangeChange,
  className = '', 
  children, 
  ...props 
}: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(value || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);
  const [rangeStart, setRangeStart] = useState<Date | null>(rangeValue?.[0] || null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(rangeValue?.[1] || null);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return disabledDates.some(d => 
      d.getFullYear() === date.getFullYear() &&
      d.getMonth() === date.getMonth() &&
      d.getDate() === date.getDate()
    );
  };

  const isDateSelected = (date: Date) => {
    if (!selectedDate) return false;
    return selectedDate.getFullYear() === date.getFullYear() &&
           selectedDate.getMonth() === date.getMonth() &&
           selectedDate.getDate() === date.getDate();
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate();
  };

  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return;
    
    if (rangeMode) {
      if (!rangeStart || (rangeStart && rangeEnd)) {
        setRangeStart(date);
        setRangeEnd(null);
        if (onRangeChange) onRangeChange([date, null]);
      } else {
        if (date < rangeStart) {
          setRangeEnd(rangeStart);
          setRangeStart(date);
          if (onRangeChange) onRangeChange([date, rangeStart]);
        } else {
          setRangeEnd(date);
          if (onRangeChange) onRangeChange([rangeStart, date]);
        }
      }
    } else {
      setSelectedDate(date);
      if (onChange) onChange(date);
    }
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
  const days = [];
  
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(<div key={`empty-${i}`} className="calendar-day calendar-day-outside-month" />);
  }
  
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const disabled = isDateDisabled(date);
    const selected = isDateSelected(date);
    const today = isToday(date);
    
    days.push(
      <button
        key={day}
        type="button"
        className={`calendar-day ${today ? 'calendar-day-today' : ''} ${selected ? 'calendar-day-selected' : ''} ${disabled ? 'calendar-day-disabled' : ''}`}
        onClick={() => handleDateClick(date)}
        disabled={disabled}
      >
        {day}
      </button>
    );
  }

  const baseClass = 'calendar';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      <div className="calendar-header">
        <button className="calendar-nav-button" onClick={prevMonth} type="button">‹</button>
        <div className="calendar-title">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </div>
        <button className="calendar-nav-button" onClick={nextMonth} type="button">›</button>
      </div>
      
      <div className="calendar-grid">
        {dayNames.map(day => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
        {days}
      </div>
      
      {children}
    </div>
  );
};

export default Calendar;
