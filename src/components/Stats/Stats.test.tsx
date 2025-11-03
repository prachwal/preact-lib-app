import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import Stats from '.';

describe('Stats', () => {
  it('renders with default props', () => {
    const { container } = render(<Stats>Test content</Stats>);
    const element = container.querySelector('.stats');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Stats className="custom-class">Test</Stats>);
    const element = container.querySelector('.stats');
    expect(element).toHaveClass('custom-class');
  });
});
