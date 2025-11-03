import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import CodeBlock from '.';

describe('CodeBlock', () => {
  it('renders with default props', () => {
    const { container } = render(<CodeBlock>Test content</CodeBlock>);
    const element = container.querySelector('.code-block');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<CodeBlock className="custom-class">Test</CodeBlock>);
    const element = container.querySelector('.code-block');
    expect(element).toHaveClass('custom-class');
  });
});
