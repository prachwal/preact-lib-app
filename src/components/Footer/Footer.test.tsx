import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import Footer from '.';

describe('Footer', () => {
  it('renders with default props', () => {
    const { container } = render(<Footer>Test content</Footer>);
    const element = container.querySelector('.footer');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Footer className="custom-class">Test</Footer>);
    const element = container.querySelector('.footer');
    expect(element).toHaveClass('custom-class');
  });
});
