import type { ComponentChildren } from 'preact';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerStyle = 'solid' | 'dashed' | 'dotted';

export interface DividerProps {
  orientation?: DividerOrientation;
  style?: DividerStyle;
  children?: ComponentChildren;
  className?: string;
}

export const Divider = ({ 
  orientation = 'horizontal',
  style = 'solid',
  children,
  className = ''
}: DividerProps) => {
  const baseClass = 'divider';
  const orientationClass = orientation === 'vertical' ? 'divider-vertical' : 'divider-horizontal';
  const styleClass = style !== 'solid' ? `divider-${style}` : '';
  const withTextClass = children ? 'divider-with-text' : '';
  
  const classes = [baseClass, orientationClass, styleClass, withTextClass, className]
    .filter(Boolean)
    .join(' ');

  if (children) {
    return (
      <div className={classes} role="separator">
        <span className="divider-text">{children}</span>
      </div>
    );
  }

  return <hr className={classes} />;
};

export default Divider;
