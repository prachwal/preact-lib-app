import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import ProductCard from '.';

describe('ProductCard', () => {
  it('renders with default props', () => {
    const { container } = render(<ProductCard>Test content</ProductCard>);
    const element = container.querySelector('.product-card');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<ProductCard className="custom-class">Test</ProductCard>);
    const element = container.querySelector('.product-card');
    expect(element).toHaveClass('custom-class');
  });
});
