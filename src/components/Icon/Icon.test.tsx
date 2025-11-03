import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import Icon from '.';

describe('Icon', () => {
  it('renders with default props', () => {
    const { container } = render(<Icon>Test content</Icon>);
    const element = container.querySelector('.icon');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Icon className="custom-class">Test</Icon>);
    const element = container.querySelector('.icon');
    expect(element).toHaveClass('custom-class');
  });
});
