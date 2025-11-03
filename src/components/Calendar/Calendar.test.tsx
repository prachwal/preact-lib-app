import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import Calendar from '.';

describe('Calendar', () => {
  it('renders with default props', () => {
    const { container } = render(<Calendar>Test content</Calendar>);
    const element = container.querySelector('.calendar');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Calendar className="custom-class">Test</Calendar>);
    const element = container.querySelector('.calendar');
    expect(element).toHaveClass('custom-class');
  });
});
