import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import Divider from '.';

describe('Divider', () => {
  it('renders horizontal divider by default', () => {
    const { container } = render(<Divider />);
    const divider = container.querySelector('hr');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('divider', 'divider-horizontal');
  });

  it('renders vertical divider', () => {
    const { container } = render(<Divider orientation="vertical" />);
    const divider = container.querySelector('hr');
    expect(divider).toHaveClass('divider', 'divider-vertical');
  });

  it('renders with solid style by default', () => {
    const { container } = render(<Divider />);
    const divider = container.querySelector('hr');
    expect(divider).toHaveClass('divider');
    expect(divider).not.toHaveClass('divider-dashed');
    expect(divider).not.toHaveClass('divider-dotted');
  });

  it('renders with dashed style', () => {
    const { container } = render(<Divider style="dashed" />);
    const divider = container.querySelector('hr');
    expect(divider).toHaveClass('divider', 'divider-dashed');
  });

  it('renders with dotted style', () => {
    const { container } = render(<Divider style="dotted" />);
    const divider = container.querySelector('hr');
    expect(divider).toHaveClass('divider', 'divider-dotted');
  });

  it('renders with text content', () => {
    render(<Divider>Section Title</Divider>);
    expect(screen.getByText('Section Title')).toBeInTheDocument();
  });

  it('renders as div when text provided', () => {
    const { container } = render(<Divider>Text</Divider>);
    const divider = container.querySelector('.divider');
    expect(divider?.tagName).toBe('DIV');
    expect(divider).toHaveClass('divider', 'divider-with-text');
  });

  it('renders as hr when no text provided', () => {
    const { container } = render(<Divider />);
    const divider = container.querySelector('.divider');
    expect(divider?.tagName).toBe('HR');
  });

  it('renders with custom className', () => {
    const { container } = render(<Divider className="custom-class" />);
    expect(container.querySelector('.divider')).toHaveClass('divider', 'custom-class');
  });

  it('has role separator when rendered with text', () => {
    render(<Divider>Text</Divider>);
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
  });

  it('renders text in span with correct class', () => {
    render(<Divider>My Text</Divider>);
    const textElement = screen.getByText('My Text');
    expect(textElement).toHaveClass('divider-text');
  });
});
