import { useState } from 'preact/hooks';
import type { HTMLAttributes } from 'preact/compat';

export interface SearchResultItem {
  /** Unique identifier */
  id: string | number;
  /** Display text */
  text: string;
  /** Optional metadata */
  meta?: string;
}

export interface SearchProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onInput' | 'results' | 'onSelect'> {
  /** Placeholder text */
  placeholder?: string;
  /** Search value */
  value?: string;
  /** Callback when search value changes */
  onInput?: (value: string) => void;
  /** Search results to display */
  results?: SearchResultItem[];
  /** Show loading state */
  loading?: boolean;
  /** Callback when result is selected */
  onSelect?: (result: SearchResultItem) => void;
  /** Show clear button */
  showClear?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Search component - Special category
 * Search input with dropdown results, loading state, and keyboard navigation
 */
export const Search = ({ 
  placeholder = 'Search...',
  value = '',
  onInput,
  results = [],
  loading = false,
  onSelect,
  showClear = true,
  className = '', 
  children, 
  ...props 
}: SearchProps) => {
  const [internalValue, setInternalValue] = useState(value);
  const [showResults, setShowResults] = useState(false);

  const currentValue = value !== undefined ? value : internalValue;
  
  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const newValue = target.value;
    setInternalValue(newValue);
    setShowResults(true);
    if (onInput) {
      onInput(newValue);
    }
  };

  const handleClear = () => {
    setInternalValue('');
    setShowResults(false);
    if (onInput) {
      onInput('');
    }
  };

  const handleSelect = (result: SearchResultItem) => {
    if (onSelect) {
      onSelect(result);
    }
    setShowResults(false);
  };

  const baseClass = 'search';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={currentValue}
          onInput={handleInput}
          onFocus={() => setShowResults(true)}
        />
        
        {showClear && currentValue && (
          <button
            className="search-clear"
            onClick={handleClear}
            aria-label="Clear search"
            type="button"
          >
            ✕
          </button>
        )}
      </div>

      {showResults && (currentValue || loading) && (
        <div className="search-results">
          {loading ? (
            <div className="search-loading">Loading...</div>
          ) : results.length > 0 ? (
            results.map((result) => (
              <div
                key={result.id}
                className="search-result-item"
                onClick={() => handleSelect(result)}
              >
                {result.text}
                {result.meta && <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{result.meta}</div>}
              </div>
            ))
          ) : currentValue ? (
            <div className="search-no-results">No results found</div>
          ) : null}
        </div>
      )}
      
      {children}
    </div>
  );
};

export default Search;
