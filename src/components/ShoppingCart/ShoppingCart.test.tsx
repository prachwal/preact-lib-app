import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import ShoppingCart from '.';

describe('ShoppingCart', () => {
  it('renders with default props', () => {
    const { container } = render(<ShoppingCart>Test content</ShoppingCart>);
    const element = container.querySelector('.cart');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<ShoppingCart className="custom-class">Test</ShoppingCart>);
    const element = container.querySelector('.cart');
    expect(element).toHaveClass('custom-class');
  });
});
