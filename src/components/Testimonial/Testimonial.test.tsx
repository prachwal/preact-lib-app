import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import Testimonial from '.';

describe('Testimonial', () => {
  it('renders with default props', () => {
    const { container } = render(<Testimonial>Test content</Testimonial>);
    const element = container.querySelector('.testimonial');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Testimonial className="custom-class">Test</Testimonial>);
    const element = container.querySelector('.testimonial');
    expect(element).toHaveClass('custom-class');
  });
});
