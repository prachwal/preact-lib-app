import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/preact';
import Skeleton from '.';

describe('Skeleton', () => {
  it('renders with default props', () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.querySelector('.skeleton');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('skeleton', 'skeleton-text', 'skeleton-pulse');
  });

  it('renders with text variant', () => {
    const { container } = render(<Skeleton variant="text" />);
    expect(container.querySelector('.skeleton')).toHaveClass('skeleton', 'skeleton-text');
  });

  it('renders with circular variant', () => {
    const { container } = render(<Skeleton variant="circular" />);
    expect(container.querySelector('.skeleton')).toHaveClass('skeleton', 'skeleton-circular');
  });

  it('renders with rectangular variant', () => {
    const { container } = render(<Skeleton variant="rectangular" />);
    expect(container.querySelector('.skeleton')).toHaveClass('skeleton', 'skeleton-rectangular');
  });

  it('renders with pulse animation by default', () => {
    const { container } = render(<Skeleton />);
    expect(container.querySelector('.skeleton')).toHaveClass('skeleton-pulse');
  });

  it('renders with wave animation', () => {
    const { container } = render(<Skeleton animation="wave" />);
    expect(container.querySelector('.skeleton')).toHaveClass('skeleton', 'skeleton-wave');
  });

  it('renders without animation', () => {
    const { container } = render(<Skeleton animation="none" />);
    const skeleton = container.querySelector('.skeleton');
    expect(skeleton).toHaveClass('skeleton');
    expect(skeleton).not.toHaveClass('skeleton-pulse');
    expect(skeleton).not.toHaveClass('skeleton-wave');
  });

  it('applies width as number', () => {
    const { container } = render(<Skeleton width={200} />);
    const skeleton = container.querySelector('.skeleton');
    expect(skeleton).toHaveStyle({ width: '200px' });
  });

  it('applies width as string', () => {
    const { container } = render(<Skeleton width="50%" />);
    const skeleton = container.querySelector('.skeleton');
    expect(skeleton).toHaveStyle({ width: '50%' });
  });

  it('applies height as number', () => {
    const { container } = render(<Skeleton height={100} />);
    const skeleton = container.querySelector('.skeleton');
    expect(skeleton).toHaveStyle({ height: '100px' });
  });

  it('applies height as string', () => {
    const { container } = render(<Skeleton height="10rem" />);
    const skeleton = container.querySelector('.skeleton');
    expect(skeleton).toHaveStyle({ height: '10rem' });
  });

  it('applies both width and height', () => {
    const { container } = render(<Skeleton width={150} height={100} />);
    const skeleton = container.querySelector('.skeleton');
    expect(skeleton).toHaveStyle({ width: '150px', height: '100px' });
  });

  it('renders with custom className', () => {
    const { container } = render(<Skeleton className="custom" />);
    expect(container.querySelector('.skeleton')).toHaveClass('skeleton', 'custom');
  });

  it('has correct aria attributes', () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.querySelector('.skeleton');
    expect(skeleton).toHaveAttribute('aria-busy', 'true');
    expect(skeleton).toHaveAttribute('aria-live', 'polite');
  });

  it('renders circular with dimensions', () => {
    const { container } = render(<Skeleton variant="circular" width={40} height={40} />);
    const skeleton = container.querySelector('.skeleton');
    expect(skeleton).toHaveClass('skeleton-circular');
    expect(skeleton).toHaveStyle({ width: '40px', height: '40px' });
  });
});
