import { useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';

export interface AccordionItemProps {
  title: string;
  children: ComponentChildren;
  defaultOpen?: boolean;
  disabled?: boolean;
}

export const AccordionItem = ({ title, children, defaultOpen = false, disabled = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`accordion-item ${disabled ? 'accordion-item-disabled' : ''}`}>
      <button
        className={`accordion-header ${isOpen ? 'accordion-header-open' : ''}`}
        onClick={toggle}
        disabled={disabled}
        aria-expanded={isOpen}
      >
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

export interface AccordionProps {
  children: ComponentChildren;
  className?: string;
}

export const Accordion = ({ children, className = '' }: AccordionProps) => {
  return (
    <div className={`accordion ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Accordion;
