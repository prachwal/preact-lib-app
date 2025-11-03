import type { HTMLAttributes } from 'preact/compat';

export interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * CodeBlock component - Special category
 */
export const CodeBlock = ({ className = '', children, ...props }: CodeBlockProps) => {
  const baseClass = 'code-block';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default CodeBlock;
