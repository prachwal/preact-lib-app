import type { ComponentChildren } from 'preact';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

export interface CardProps {
  variant?: CardVariant;
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
  children: ComponentChildren;
  style?: Record<string, string>;
}

export const Card = ({ 
  variant = 'elevated',
  hoverable = false,
  clickable = false,
  onClick,
  className = '',
  children,
  style
}: CardProps) => {
  const baseClass = 'card';
  const variantClass = variant !== 'elevated' ? `card-${variant}` : '';
  const hoverableClass = hoverable ? 'card-hoverable' : '';
  const clickableClass = clickable || onClick ? 'card-clickable' : '';
  
  const classes = [baseClass, variantClass, hoverableClass, clickableClass, className]
    .filter(Boolean)
    .join(' ');

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      className={classes}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={style}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }: { children: ComponentChildren; className?: string }) => (
  <div className={`card-header ${className}`.trim()}>{children}</div>
);

export const CardMedia = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <div className={`card-media ${className}`.trim()}>
    <img src={src} alt={alt} />
  </div>
);

export const CardBody = ({ children, className = '' }: { children: ComponentChildren; className?: string }) => (
  <div className={`card-body ${className}`.trim()}>{children}</div>
);

export const CardFooter = ({ children, className = '' }: { children: ComponentChildren; className?: string }) => (
  <div className={`card-footer ${className}`.trim()}>{children}</div>
);

export default Card;
