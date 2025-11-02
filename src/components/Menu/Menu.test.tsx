import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Menu from '.';

describe('Menu', () => {
  const items = [
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2' },
    { id: '3', label: 'Item 3' },
  ];

  it('renders when open', () => {
    render(<Menu items={items} open />);
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<Menu items={items} open={false} />);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('renders all menu items', () => {
    render(<Menu items={items} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('handles item click', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    const itemsWithClick = [{ id: '1', label: 'Clickable', onClick: handleClick }];
    render(<Menu items={itemsWithClick} />);

    await user.click(screen.getByText('Clickable'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when item is clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Menu items={items} onClose={handleClose} />);

    await user.click(screen.getAllByRole('menuitem')[0]);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('renders items with icons', () => {
    const itemsWithIcons = [{ id: '1', label: 'Home', icon: '🏠' }];
    render(<Menu items={itemsWithIcons} />);
    expect(screen.getByText('🏠')).toBeInTheDocument();
  });

  it('renders dividers', () => {
    const itemsWithDivider = [
      { id: '1', label: 'Item 1' },
      { id: 'div', label: 'Divider', divider: true },
      { id: '2', label: 'Item 2' },
    ];
    const { container } = render(<Menu items={itemsWithDivider} />);
    expect(container.querySelector('.menu-divider')).toBeInTheDocument();
  });

  it('disables clicking on disabled items', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    const itemsWithDisabled = [
      { id: '1', label: 'Disabled', onClick: handleClick, disabled: true },
    ];
    render(<Menu items={itemsWithDisabled} />);

    const item = screen.getByText('Disabled').closest('button');
    expect(item).toBeDisabled();
    await user.click(item!);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders items with href as links', () => {
    const itemsWithHref = [{ id: '1', label: 'Link', href: '/test' }];
    render(<Menu items={itemsWithHref} />);
    const link = screen.getByText('Link').closest('a');
    expect(link).toHaveAttribute('href', '/test');
  });
});
