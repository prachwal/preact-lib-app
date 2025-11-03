import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import Rating from '.';

describe('Rating', () => {
  it('renders with default props', () => {
    const { container } = render(<Rating>Test content</Rating>);
    const element = container.querySelector('.rating');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Rating className="custom-class">Test</Rating>);
    const element = container.querySelector('.rating');
    expect(element).toHaveClass('custom-class');
  });
});
