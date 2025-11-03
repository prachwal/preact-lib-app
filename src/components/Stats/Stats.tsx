import type { HTMLAttributes } from 'preact/compat';

export type StatTrend = 'positive' | 'negative' | 'neutral';

export interface StatCardProps {
  /** Stat value (number or formatted string) */
  value: string | number;
  /** Stat label/description */
  label: string;
  /** Icon or element */
  icon?: preact.ComponentChildren;
  /** Trend direction */
  trend?: StatTrend;
  /** Change percentage or value */
  change?: string;
}

export interface StatsProps extends HTMLAttributes<HTMLDivElement> {
  /** Array of stat cards */
  stats?: StatCardProps[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * Stats component - Special category
 * Display metrics and statistics in a grid layout
 */
export const Stats = ({ 
  stats = [],
  className = '', 
  children, 
  ...props 
}: StatsProps) => {
  const baseClass = 'stats';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {stats.length > 0 ? (
        stats.map((stat, index) => (
          <div key={index} className="stats-card">
            {stat.icon && (
              <div className="stats-icon">{stat.icon}</div>
            )}
            
            <div className="stats-value">{stat.value}</div>
            <div className="stats-label">{stat.label}</div>
            
            {stat.trend && stat.change && (
              <div className={`stats-trend stats-trend-${stat.trend}`}>
                <span className="stats-change">
                  {stat.trend === 'positive' ? '↑' : stat.trend === 'negative' ? '↓' : ''}
                  {stat.change}
                </span>
              </div>
            )}
          </div>
        ))
      ) : (
        children
      )}
    </div>
  );
};

export default Stats;
