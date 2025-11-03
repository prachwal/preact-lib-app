import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import Progress from '.';

describe('Progress', () => {
  it('renders linear progress by default', () => {
    render(<Progress value={50} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveClass('progress', 'progress-linear');
  });

  it('renders circular progress', () => {
    const { container } = render(<Progress variant="circular" value={50} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveClass('progress', 'progress-circular');
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('sets correct aria attributes', () => {
    render(<Progress value={60} max={100} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuenow', '60');
    expect(progress).toHaveAttribute('aria-valuemin', '0');
    expect(progress).toHaveAttribute('aria-valuemax', '100');
  });

  it('renders with different colors', () => {
    const { container, rerender } = render(<Progress color="success" value={50} />);
    expect(container.querySelector('.progress')).toHaveClass('progress', 'progress-success');

    rerender(<Progress color="error" value={50} />);
    expect(container.querySelector('.progress')).toHaveClass('progress', 'progress-error');

    rerender(<Progress color="warning" value={50} />);
    expect(container.querySelector('.progress')).toHaveClass('progress', 'progress-warning');
  });

  it('renders with different sizes', () => {
    const { container, rerender } = render(<Progress size="sm" value={50} />);
    expect(container.querySelector('.progress')).toHaveClass('progress', 'progress-sm');

    rerender(<Progress size="md" value={50} />);
    const md = container.querySelector('.progress');
    expect(md).toHaveClass('progress');
    expect(md).not.toHaveClass('progress-md');

    rerender(<Progress size="lg" value={50} />);
    expect(container.querySelector('.progress')).toHaveClass('progress', 'progress-lg');
  });

  it('renders label when showLabel is true', () => {
    render(<Progress value={45} showLabel />);
    expect(screen.getByText('45%')).toBeInTheDocument();
  });

  it('renders custom label', () => {
    render(<Progress value={45} showLabel label="Almost there!" />);
    expect(screen.getByText('Almost there!')).toBeInTheDocument();
  });

  it('does not render label when showLabel is false', () => {
    const { container } = render(<Progress value={45} />);
    expect(container.querySelector('.progress-label')).not.toBeInTheDocument();
  });

  it('renders as indeterminate', () => {
    const { container } = render(<Progress indeterminate />);
    expect(container.querySelector('.progress')).toHaveClass('progress', 'progress-indeterminate');
  });

  it('does not show label when indeterminate', () => {
    const { container } = render(<Progress indeterminate showLabel />);
    expect(container.querySelector('.progress-label')).not.toBeInTheDocument();
  });

  it('calculates percentage correctly', () => {
    render(<Progress value={30} max={100} showLabel />);
    expect(screen.getByText('30%')).toBeInTheDocument();
  });

  it('calculates percentage with custom max', () => {
    render(<Progress value={50} max={200} showLabel />);
    expect(screen.getByText('25%')).toBeInTheDocument();
  });

  it('clamps percentage to 0-100 range', () => {
    const { rerender } = render(<Progress value={-10} showLabel />);
    expect(screen.getByText('0%')).toBeInTheDocument();

    rerender(<Progress value={150} max={100} showLabel />);
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<Progress className="custom" value={50} />);
    expect(container.querySelector('.progress')).toHaveClass('progress', 'custom');
  });

  it('applies correct width style to linear progress fill', () => {
    const { container } = render(<Progress value={75} />);
    const fill = container.querySelector('.progress-fill');
    expect(fill).toHaveStyle({ width: '75%' });
  });

  it('renders circular progress with correct SVG elements', () => {
    const { container } = render(<Progress variant="circular" value={60} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(container.querySelectorAll('circle')).toHaveLength(2); // track + fill
  });

  it('does not render fill circle when circular and indeterminate', () => {
    const { container } = render(<Progress variant="circular" indeterminate />);
    expect(container.querySelectorAll('circle')).toHaveLength(1); // only track
  });
});
