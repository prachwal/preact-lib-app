import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import Timeline from '.';

describe('Timeline', () => {
  it('renders with default props', () => {
    const { container } = render(<Timeline>Test content</Timeline>);
    const element = container.querySelector('.timeline');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Timeline className="custom-class">Test</Timeline>);
    const element = container.querySelector('.timeline');
    expect(element).toHaveClass('custom-class');
  });
});
