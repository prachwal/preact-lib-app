import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import Comment from '.';

describe('Comment', () => {
  it('renders with default props', () => {
    const { container } = render(<Comment author="Test User" text="Test content" />);
    const element = container.querySelector('.comment');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Comment author="Test User" text="Test" className="custom-class" />);
    const element = container.querySelector('.comment');
    expect(element).toHaveClass('custom-class');
  });
});
