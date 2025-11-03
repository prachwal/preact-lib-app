import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import Testimonial from '.';

describe('Testimonial', () => {
  it('renders with default props', () => {
    const { container } = render(<Testimonial quote="Test quote" author="Test Author" />);
    const element = container.querySelector('.testimonial');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test quote');
  });

  it('renders with custom className', () => {
    const { container } = render(<Testimonial quote="Test quote" author="Test Author" className="custom-class" />);
    const element = container.querySelector('.testimonial');
    expect(element).toHaveClass('custom-class');
  });
});
