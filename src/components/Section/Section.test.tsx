import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import Section from '.';

describe('Section', () => {
  it('renders with default props', () => {
    const { container } = render(<Section>Test content</Section>);
    const element = container.querySelector('.section');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Section className="custom-class">Test</Section>);
    const element = container.querySelector('.section');
    expect(element).toHaveClass('custom-class');
  });
});
