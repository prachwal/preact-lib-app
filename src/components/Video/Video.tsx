import type { HTMLAttributes } from 'preact/compat';

export interface VideoProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Video component - Media category
 */
export const Video = ({ className = '', children, ...props }: VideoProps) => {
  const baseClass = 'video';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Video;
