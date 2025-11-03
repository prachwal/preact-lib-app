import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import Search from '.';

describe('Search', () => {
  it('renders with default props', () => {
    const { container } = render(<Search>Test content</Search>);
    const element = container.querySelector('.search');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Search className="custom-class">Test</Search>);
    const element = container.querySelector('.search');
    expect(element).toHaveClass('custom-class');
  });
});
