import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import PricingCard from '.';

describe('PricingCard', () => {
  it('renders with default props', () => {
    const { container } = render(<PricingCard>Test content</PricingCard>);
    const element = container.querySelector('.pricing');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<PricingCard className="custom-class">Test</PricingCard>);
    const element = container.querySelector('.pricing');
    expect(element).toHaveClass('custom-class');
  });
});
