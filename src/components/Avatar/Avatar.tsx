import type { ComponentChildren } from 'preact';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarShape = 'circle' | 'square';

export interface AvatarProps {
  size?: AvatarSize;
  shape?: AvatarShape;
  src?: string;
  alt?: string;
  initials?: string;
  className?: string;
  children?: ComponentChildren;
  status?: 'online' | 'offline' | 'away' | 'busy';
  style?: Record<string, string>;
}

export const Avatar = ({ 
  size = 'md',
  shape = 'circle',
  src,
  alt = 'Avatar',
  initials,
  className = '',
  children,
  status,
  style
}: AvatarProps) => {
  const baseClass = 'avatar';
  const sizeClass = size !== 'md' ? `avatar-${size}` : '';
  const shapeClass = shape === 'square' ? 'avatar-square' : '';
  
  const classes = [baseClass, sizeClass, shapeClass, className]
    .filter(Boolean)
    .join(' ');

  const renderContent = () => {
    if (src) {
      return <img src={src} alt={alt} className="avatar-image" />;
    }
    if (initials) {
      return <span className="avatar-initials">{initials}</span>;
    }
    if (children) {
      return children;
    }
    return <span className="avatar-placeholder">?</span>;
  };

  return (
    <div className={classes} style={style}>
      {renderContent()}
      {status && <span className={`avatar-status avatar-status-${status}`} />}
    </div>
  );
};

export default Avatar;
