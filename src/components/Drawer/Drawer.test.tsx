import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import Drawer from '.';

describe('Drawer', () => {
  it('renders with default props when open', () => {
    const { container } = render(<Drawer open={true}>Test content</Drawer>);
    const element = container.querySelector('.drawer');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Drawer open={true} className="custom-class">Test</Drawer>);
    const element = container.querySelector('.drawer');
    expect(element).toHaveClass('custom-class');
  });

  it('does not render when closed', () => {
    const { container } = render(<Drawer open={false}>Test content</Drawer>);
    const element = container.querySelector('.drawer');
    expect(element).not.toBeInTheDocument();
  });

  it('renders backdrop when showBackdrop is true', () => {
    const { container } = render(<Drawer open={true} showBackdrop={true}>Test</Drawer>);
    const backdrop = container.querySelector('.drawer-backdrop');
    expect(backdrop).toBeInTheDocument();
  });

  it('does not render backdrop when showBackdrop is false', () => {
    const { container } = render(<Drawer open={true} showBackdrop={false}>Test</Drawer>);
    const backdrop = container.querySelector('.drawer-backdrop');
    expect(backdrop).not.toBeInTheDocument();
  });

  it('renders header when provided', () => {
    const { container } = render(<Drawer open={true} header="Test Header">Test</Drawer>);
    const header = container.querySelector('.drawer-header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Test Header');
  });

  it('renders footer when provided', () => {
    const { container } = render(<Drawer open={true} footer="Test Footer">Test</Drawer>);
    const footer = container.querySelector('.drawer-footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent('Test Footer');
  });

  it('renders close button when showCloseButton is true', () => {
    const { container } = render(<Drawer open={true} showCloseButton={true}>Test</Drawer>);
    const closeButton = container.querySelector('.drawer-close');
    expect(closeButton).toBeInTheDocument();
  });

  it('does not render close button when showCloseButton is false', () => {
    const { container } = render(<Drawer open={true} showCloseButton={false}>Test</Drawer>);
    const closeButton = container.querySelector('.drawer-close');
    expect(closeButton).not.toBeInTheDocument();
  });

  it('applies position class', () => {
    const { container } = render(<Drawer open={true} position="left">Test</Drawer>);
    const element = container.querySelector('.drawer');
    expect(element).toHaveClass('drawer-left');
  });

  it('applies size class', () => {
    const { container } = render(<Drawer open={true} size="lg">Test</Drawer>);
    const element = container.querySelector('.drawer');
    expect(element).toHaveClass('drawer-lg');
  });

  it('applies open class when open', () => {
    const { container } = render(<Drawer open={true}>Test</Drawer>);
    const element = container.querySelector('.drawer');
    expect(element).toHaveClass('drawer-open');
  });
});
