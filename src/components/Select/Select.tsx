import { useState, useRef, useEffect } from 'preact/hooks';
import type { SelectHTMLAttributes } from 'preact';

export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectPosition = 'top' | 'bottom' | 'auto';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectOptionGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: SelectSize;
  label?: string;
  helperText?: string;
  errorText?: string;
  successText?: string;
  options?: Array<SelectOption | SelectOptionGroup>;
  searchable?: boolean;
  placeholder?: string;
  dropdownPosition?: SelectPosition;
}

const isOptionGroup = (option: SelectOption | SelectOptionGroup): option is SelectOptionGroup => {
  return 'options' in option;
};

export const Select = ({
  size = 'md',
  label,
  helperText,
  errorText,
  successText,
  options = [],
  searchable = false,
  placeholder = 'Select...',
  dropdownPosition = 'auto',
  className = '',
  disabled = false,
  required,
  multiple = false,
  children,
  value,
  onChange,
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[]>(
    multiple ? (Array.isArray(value) ? value : value ? [value as string] : []) : []
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const baseClass = 'select';
  const sizeClass = size !== 'md' ? `select-${size}` : '';
  const errorClass = errorText ? 'select-error' : '';
  const successClass = successText ? 'select-success' : '';
  const disabledClass = disabled ? 'select-disabled' : '';

  const containerClasses = [
    'select-container',
    sizeClass ? `select-container-${size}` : '',
    errorClass ? 'select-container-error' : '',
    successClass ? 'select-container-success' : '',
    disabledClass ? 'select-container-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const selectClasses = [baseClass, sizeClass, errorClass, successClass, disabledClass]
    .filter(Boolean)
    .join(' ');

  const currentMessage = errorText || successText || helperText;

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Filter options based on search term
  const filterOptions = (opts: Array<SelectOption | SelectOptionGroup>): Array<SelectOption | SelectOptionGroup> => {
    if (!searchable || !searchTerm) return opts;

    return opts
      .map((opt) => {
        if (isOptionGroup(opt)) {
          const filteredOptions = opt.options.filter((o) =>
            o.label.toLowerCase().includes(searchTerm.toLowerCase())
          );
          return filteredOptions.length > 0 ? { ...opt, options: filteredOptions } : null;
        }
        return opt.label.toLowerCase().includes(searchTerm.toLowerCase()) ? opt : null;
      })
      .filter((opt): opt is SelectOption | SelectOptionGroup => opt !== null);
  };

  const handleOptionClick = (optionValue: string) => {
    if (multiple) {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter((v) => v !== optionValue)
        : [...selectedValues, optionValue];
      setSelectedValues(newValues);
      
      // Trigger onChange with multiple values
      if (onChange) {
        const event = { target: { value: newValues } } as any;
        onChange(event);
      }
    } else {
      setSelectedValues([optionValue]);
      setIsOpen(false);
      
      // Trigger onChange
      if (onChange) {
        const event = { target: { value: optionValue } } as any;
        onChange(event);
      }
    }
  };

  const getSelectedLabel = () => {
    if (multiple) {
      if (selectedValues.length === 0) return placeholder;
      return `${selectedValues.length} selected`;
    }
    
    const findOption = (opts: Array<SelectOption | SelectOptionGroup>): SelectOption | null => {
      for (const opt of opts) {
        if (isOptionGroup(opt)) {
          const found = opt.options.find((o) => o.value === selectedValues[0]);
          if (found) return found;
        } else {
          if (opt.value === selectedValues[0]) return opt;
        }
      }
      return null;
    };
    
    const selected = findOption(options);
    return selected ? selected.label : placeholder;
  };

  // If not searchable or multiple, use native select
  if (!searchable && !multiple) {
    return (
      <div className={containerClasses}>
        {label && (
          <label className="select-label">
            {label}
            {required && <span className="select-required">*</span>}
          </label>
        )}
        <div className="select-content">
          <div className="select-wrapper">
            <select 
              className={selectClasses} 
              disabled={disabled} 
              required={required} 
              value={value}
              onChange={onChange}
              {...props}
            >
              {children ||
                options.map((option) => {
                  if (isOptionGroup(option)) {
                    return (
                      <optgroup key={option.label} label={option.label}>
                        {option.options.map((opt) => (
                          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                            {opt.label}
                          </option>
                        ))}
                      </optgroup>
                    );
                  }
                  return (
                    <option key={option.value} value={option.value} disabled={option.disabled}>
                      {option.label}
                    </option>
                  );
                })}
            </select>
            <span className="select-arrow" aria-hidden="true">
              ▼
            </span>
          </div>
          {currentMessage && <span className="select-message">{currentMessage}</span>}
        </div>
      </div>
    );
  }

  // Custom dropdown for searchable or multiple
  const filteredOptions = filterOptions(options);

  return (
    <div className={containerClasses} ref={wrapperRef}>
      {label && (
        <label className="select-label">
          {label}
          {required && <span className="select-required">*</span>}
        </label>
      )}
      <div className="select-content">
        <div className="select-wrapper">
          <div
            className={`${selectClasses} select-custom-trigger`}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <span className="select-value">{getSelectedLabel()}</span>
            <span className="select-arrow" aria-hidden="true">
              {isOpen ? '▲' : '▼'}
            </span>
          </div>
          
          {isOpen && (
            <div 
              className={`select-dropdown select-dropdown-${dropdownPosition}`}
              ref={dropdownRef}
              role="listbox"
              aria-multiselectable={multiple}
            >
              {searchable && (
                <div className="select-search">
                  <input
                    type="text"
                    className="select-search-input"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
              
              <div className="select-options">
                {filteredOptions.length === 0 ? (
                  <div className="select-no-results">No results found</div>
                ) : (
                  filteredOptions.map((option) => {
                    if (isOptionGroup(option)) {
                      return (
                        <div key={option.label} className="select-group">
                          <div className="select-group-label">{option.label}</div>
                          {option.options.map((opt) => (
                            <div
                              key={opt.value}
                              className={`select-option ${
                                selectedValues.includes(opt.value) ? 'select-option-selected' : ''
                              } ${opt.disabled ? 'select-option-disabled' : ''}`}
                              onClick={() => !opt.disabled && handleOptionClick(opt.value)}
                              role="option"
                              aria-selected={selectedValues.includes(opt.value)}
                              aria-disabled={opt.disabled}
                            >
                              {multiple && (
                                <span className="select-checkbox">
                                  {selectedValues.includes(opt.value) ? '✓' : ''}
                                </span>
                              )}
                              {opt.label}
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return (
                      <div
                        key={option.value}
                        className={`select-option ${
                          selectedValues.includes(option.value) ? 'select-option-selected' : ''
                        } ${option.disabled ? 'select-option-disabled' : ''}`}
                        onClick={() => !option.disabled && handleOptionClick(option.value)}
                        role="option"
                        aria-selected={selectedValues.includes(option.value)}
                        aria-disabled={option.disabled}
                      >
                        {multiple && (
                          <span className="select-checkbox">
                            {selectedValues.includes(option.value) ? '✓' : ''}
                          </span>
                        )}
                        {option.label}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>
        {currentMessage && <span className="select-message">{currentMessage}</span>}
      </div>
    </div>
  );
};

export default Select;
