import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import Carousel from '.';

describe('Carousel', () => {
  it('renders with default props', () => {
    const { container } = render(<Carousel>Test content</Carousel>);
    const element = container.querySelector('.carousel');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Carousel className="custom-class">Test</Carousel>);
    const element = container.querySelector('.carousel');
    expect(element).toHaveClass('custom-class');
  });
});
