import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import ShareButtons from '.';

describe('ShareButtons', () => {
  it('renders with default props', () => {
    const { container } = render(<ShareButtons>Test content</ShareButtons>);
    const element = container.querySelector('.share');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<ShareButtons className="custom-class">Test</ShareButtons>);
    const element = container.querySelector('.share');
    expect(element).toHaveClass('custom-class');
  });
});
