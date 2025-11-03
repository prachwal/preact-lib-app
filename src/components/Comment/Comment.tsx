import type { HTMLAttributes } from 'preact/compat';

export interface CommentProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Comment component - Social category
 */
export const Comment = ({ className = '', children, ...props }: CommentProps) => {
  const baseClass = 'comment';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Comment;
