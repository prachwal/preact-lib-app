import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import ShoppingCart from '.';

describe('ShoppingCart', () => {
  const mockItems = [
    {
      id: 1,
      title: 'Test Product',
      price: 99.99,
      quantity: 1,
      image: '/test.jpg'
    }
  ];

  it('renders with default props', () => {
    const { container } = render(<ShoppingCart items={mockItems} />);
    const element = container.querySelector('.cart');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test Product');
  });

  it('renders with custom className', () => {
    const { container } = render(<ShoppingCart items={mockItems} className="custom-class" />);
    const element = container.querySelector('.cart');
    expect(element).toHaveClass('custom-class');
  });

  it('renders empty state when no items', () => {
    const { container } = render(<ShoppingCart />);
    const element = container.querySelector('.cart-empty');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Your cart is empty');
  });
});
