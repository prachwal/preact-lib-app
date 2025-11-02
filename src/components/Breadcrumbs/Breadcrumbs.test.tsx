import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Breadcrumbs from '.';

describe('Breadcrumbs', () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Current' },
  ];

  it('renders with default props', () => {
    render(<Breadcrumbs items={items} />);
    expect(screen.getByLabelText('breadcrumb')).toBeInTheDocument();
  });

  it('renders all items', () => {
    render(<Breadcrumbs items={items} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Current')).toBeInTheDocument();
  });

  it('renders links for items with href', () => {
    render(<Breadcrumbs items={items} />);
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('renders current item without link', () => {
    render(<Breadcrumbs items={items} />);
    const current = screen.getByText('Current');
    expect(current.closest('a')).toBeNull();
    expect(current.tagName).toBe('SPAN');
  });

  it('renders default separator', () => {
    const { container } = render(<Breadcrumbs items={items} />);
    const separators = container.querySelectorAll('.breadcrumbs-separator');
    expect(separators).toHaveLength(2); // One less than items
    expect(separators[0]).toHaveTextContent('/');
  });

  it('renders custom separator', () => {
    const { container } = render(<Breadcrumbs items={items} separator=">" />);
    const separators = container.querySelectorAll('.breadcrumbs-separator');
    expect(separators[0]).toHaveTextContent('>');
  });

  it('handles onClick events', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    const clickItems = [
      { label: 'Home', onClick: handleClick },
      { label: 'Current' },
    ];
    render(<Breadcrumbs items={clickItems} />);

    const button = screen.getByText('Home').closest('button');
    expect(button).toBeInTheDocument();
    await user.click(button!);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('limits items when maxItems is set', () => {
    const manyItems = [
      { label: 'Home', href: '/' },
      { label: 'L1', href: '/l1' },
      { label: 'L2', href: '/l2' },
      { label: 'L3', href: '/l3' },
      { label: 'Current' },
    ];
    render(<Breadcrumbs items={manyItems} maxItems={3} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('Current')).toBeInTheDocument();
    expect(screen.queryByText('L1')).not.toBeInTheDocument();
    expect(screen.queryByText('L2')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Breadcrumbs items={items} className="custom-class" />);
    expect(container.querySelector('.breadcrumbs')).toHaveClass('breadcrumbs', 'custom-class');
  });

  it('passes through other props', () => {
    render(<Breadcrumbs items={items} data-testid="breadcrumbs" />);
    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
  });
});
