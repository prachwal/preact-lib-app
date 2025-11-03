import type { HTMLAttributes } from 'preact/compat';

export type TimelineOrientation = 'vertical' | 'horizontal';

export interface TimelineItemProps {
  /** Timeline marker icon or content */
  marker?: preact.ComponentChildren;
  /** Whether to use custom icon instead of dot */
  icon?: preact.ComponentChildren;
  /** Timestamp or date */
  timestamp?: string;
  /** Item content */
  content: preact.ComponentChildren;
}

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  /** Timeline orientation */
  orientation?: TimelineOrientation;
  /** Timeline items */
  items?: TimelineItemProps[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * Timeline component - Special category
 * Vertical or horizontal timeline with markers and content
 */
export const Timeline = ({ 
  orientation = 'vertical',
  items = [],
  className = '', 
  children, 
  ...props 
}: TimelineProps) => {
  const baseClass = 'timeline';
  const orientationClass = `timeline-${orientation}`;
  
  const classes = [baseClass, orientationClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="timeline-item">
            {item.icon ? (
              <div className="timeline-icon">{item.icon}</div>
            ) : (
              <div className="timeline-marker" />
            )}
            <div className="timeline-content">
              {item.timestamp && (
                <div className="timeline-timestamp">{item.timestamp}</div>
              )}
              {item.content}
            </div>
          </div>
        ))
      ) : (
        children
      )}
    </div>
  );
};

export default Timeline;
