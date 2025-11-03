import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import Container from '.';

describe('Container', () => {
  it('renders with default props', () => {
    const { container } = render(<Container>Test content</Container>);
    const element = container.querySelector('.container');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Container className="custom-class">Test</Container>);
    const element = container.querySelector('.container');
    expect(element).toHaveClass('custom-class');
  });
});
