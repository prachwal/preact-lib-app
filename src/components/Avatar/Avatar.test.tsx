import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import Avatar from '.';

describe('Avatar', () => {
  it('renders with default props', () => {
    const { container } = render(<Avatar />);
    const avatar = container.querySelector('.avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('avatar');
  });

  it('renders with image', () => {
    render(<Avatar src="test.jpg" alt="Test Avatar" />);
    const image = screen.getByAltText('Test Avatar');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test.jpg');
    expect(image).toHaveClass('avatar-image');
  });

  it('renders with initials', () => {
    render(<Avatar initials="JD" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
    expect(screen.getByText('JD')).toHaveClass('avatar-initials');
  });

  it('renders placeholder when no content', () => {
    render(<Avatar />);
    expect(screen.getByText('?')).toBeInTheDocument();
    expect(screen.getByText('?')).toHaveClass('avatar-placeholder');
  });

  it('prioritizes src over initials', () => {
    render(<Avatar src="test.jpg" initials="JD" alt="Test" />);
    expect(screen.getByAltText('Test')).toBeInTheDocument();
    expect(screen.queryByText('JD')).not.toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { container, rerender } = render(<Avatar size="xs" initials="XS" />);
    expect(container.querySelector('.avatar')).toHaveClass('avatar', 'avatar-xs');

    rerender(<Avatar size="sm" initials="SM" />);
    expect(container.querySelector('.avatar')).toHaveClass('avatar', 'avatar-sm');

    rerender(<Avatar size="md" initials="MD" />);
    const md = container.querySelector('.avatar');
    expect(md).toHaveClass('avatar');
    expect(md).not.toHaveClass('avatar-md');

    rerender(<Avatar size="lg" initials="LG" />);
    expect(container.querySelector('.avatar')).toHaveClass('avatar', 'avatar-lg');

    rerender(<Avatar size="xl" initials="XL" />);
    expect(container.querySelector('.avatar')).toHaveClass('avatar', 'avatar-xl');

    rerender(<Avatar size="2xl" initials="2XL" />);
    expect(container.querySelector('.avatar')).toHaveClass('avatar', 'avatar-2xl');
  });

  it('renders with circle shape by default', () => {
    const { container } = render(<Avatar initials="C" />);
    expect(container.querySelector('.avatar')).toHaveClass('avatar');
    expect(container.querySelector('.avatar')).not.toHaveClass('avatar-square');
  });

  it('renders with square shape', () => {
    const { container } = render(<Avatar shape="square" initials="S" />);
    expect(container.querySelector('.avatar')).toHaveClass('avatar', 'avatar-square');
  });

  it('renders with status indicator', () => {
    const { container } = render(<Avatar initials="JD" status="online" />);
    const status = container.querySelector('.avatar-status');
    expect(status).toBeInTheDocument();
    expect(status).toHaveClass('avatar-status', 'avatar-status-online');
  });

  it('renders different status variants', () => {
    const { container, rerender } = render(<Avatar initials="JD" status="online" />);
    expect(container.querySelector('.avatar-status')).toHaveClass('avatar-status-online');

    rerender(<Avatar initials="JD" status="offline" />);
    expect(container.querySelector('.avatar-status')).toHaveClass('avatar-status-offline');

    rerender(<Avatar initials="JD" status="away" />);
    expect(container.querySelector('.avatar-status')).toHaveClass('avatar-status-away');

    rerender(<Avatar initials="JD" status="busy" />);
    expect(container.querySelector('.avatar-status')).toHaveClass('avatar-status-busy');
  });

  it('does not render status when not provided', () => {
    const { container } = render(<Avatar initials="JD" />);
    expect(container.querySelector('.avatar-status')).not.toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<Avatar className="custom-class" initials="JD" />);
    expect(container.querySelector('.avatar')).toHaveClass('avatar', 'custom-class');
  });

  it('renders with children', () => {
    render(<Avatar><span>Custom</span></Avatar>);
    expect(screen.getByText('Custom')).toBeInTheDocument();
  });
});
