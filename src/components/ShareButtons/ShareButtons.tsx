import type { HTMLAttributes } from 'preact/compat';

export interface ShareButtonsProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * ShareButtons component - Social category
 */
export const ShareButtons = ({ className = '', children, ...props }: ShareButtonsProps) => {
  const baseClass = 'share-buttons';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default ShareButtons;
