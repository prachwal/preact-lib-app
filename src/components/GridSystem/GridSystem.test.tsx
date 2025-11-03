import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import GridSystem from '.';

describe('GridSystem', () => {
  it('renders with default props', () => {
    const { container } = render(<GridSystem>Test content</GridSystem>);
    const element = container.querySelector('.grid-system');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<GridSystem className="custom-class">Test</GridSystem>);
    const element = container.querySelector('.grid-system');
    expect(element).toHaveClass('custom-class');
  });
});
