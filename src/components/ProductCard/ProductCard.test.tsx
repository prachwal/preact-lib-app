import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import ProductCard from '.';

describe('ProductCard', () => {
  it('renders with default props', () => {
    const { container } = render(<ProductCard image="/test.jpg" title="Test Product" price={99.99} />);
    const element = container.querySelector('.product-card');
    expect(element).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<ProductCard image="/test.jpg" title="Test Product" price={99.99} className="custom-class" />);
    const element = container.querySelector('.product-card');
    expect(element).toHaveClass('custom-class');
  });
});
