import type { HTMLAttributes } from 'preact/compat';

export type GridVariant = '12' | 'auto-fit';
export type GridGap = '0' | '2' | '4' | '6' | '8';
export type GridCols = '1' | '2' | '3' | '4' | '6';

export interface GridSystemProps extends HTMLAttributes<HTMLDivElement> {
  /** Grid layout variant */
  variant?: GridVariant;
  /** Gap between grid items */
  gap?: GridGap;
  /** Number of columns */
  cols?: GridCols;
  /** Number of columns on medium screens */
  mdCols?: '2' | '3' | '4';
  /** Number of columns on large screens */
  lgCols?: '3' | '4' | '6';
  /** Additional CSS classes */
  className?: string;
}

/**
 * GridSystem component - Layout category
 * Flexible grid system with 12-column and auto-fit layouts
 */
export const GridSystem = ({ 
  variant,
  gap,
  cols,
  mdCols,
  lgCols,
  className = '', 
  children, 
  ...props 
}: GridSystemProps) => {
  const baseClass = 'grid-system';
  const variantClass = variant ? `grid-system-${variant}` : '';
  const gapClass = gap ? `grid-system-gap-${gap}` : '';
  const colsClass = cols ? `grid-system-cols-${cols}` : '';
  const mdColsClass = mdCols ? `grid-system-md-cols-${mdCols}` : '';
  const lgColsClass = lgCols ? `grid-system-lg-cols-${lgCols}` : '';
  
  const classes = [baseClass, variantClass, gapClass, colsClass, mdColsClass, lgColsClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default GridSystem;
