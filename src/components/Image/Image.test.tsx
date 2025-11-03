import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import Image from '.';

describe('Image', () => {
  it('renders with default props', () => {
    const { container } = render(<Image>Test content</Image>);
    const element = container.querySelector('.image');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Image className="custom-class">Test</Image>);
    const element = container.querySelector('.image');
    expect(element).toHaveClass('custom-class');
  });
});
