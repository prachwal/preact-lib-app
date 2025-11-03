import type { HTMLAttributes } from 'preact/compat';

export interface SearchProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Search component - Special category
 */
export const Search = ({ className = '', children, ...props }: SearchProps) => {
  const baseClass = 'search';
  
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Search;
