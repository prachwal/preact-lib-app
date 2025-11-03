import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Pagination from '.';

describe('Pagination', () => {
  it('renders with default props', () => {
    render(<Pagination currentPage={1} totalPages={10} />);
    expect(screen.getByLabelText('pagination')).toBeInTheDocument();
  });

  it('renders page numbers', () => {
    render(<Pagination currentPage={1} totalPages={5} />);
    expect(screen.getByLabelText('Page 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Page 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Page 5')).toBeInTheDocument();
  });

  it('highlights current page', () => {
    render(<Pagination currentPage={3} totalPages={5} />);
    const currentButton = screen.getByLabelText('Page 3');
    expect(currentButton).toHaveClass('pagination-button-active');
    expect(currentButton).toHaveAttribute('aria-current', 'page');
  });

  it('renders prev and next buttons', () => {
    render(<Pagination currentPage={2} totalPages={5} />);
    expect(screen.getByLabelText('Previous page')).toBeInTheDocument();
    expect(screen.getByLabelText('Next page')).toBeInTheDocument();
  });

  it('renders first and last buttons when showFirstLast is true', () => {
    render(<Pagination currentPage={2} totalPages={5} showFirstLast />);
    expect(screen.getByLabelText('First page')).toBeInTheDocument();
    expect(screen.getByLabelText('Last page')).toBeInTheDocument();
  });

  it('disables prev button on first page', () => {
    render(<Pagination currentPage={1} totalPages={5} />);
    expect(screen.getByLabelText('Previous page')).toBeDisabled();
  });

  it('disables next button on last page', () => {
    render(<Pagination currentPage={5} totalPages={5} />);
    expect(screen.getByLabelText('Next page')).toBeDisabled();
  });

  it('disables first button on first page', () => {
    render(<Pagination currentPage={1} totalPages={5} showFirstLast />);
    expect(screen.getByLabelText('First page')).toBeDisabled();
  });

  it('disables last button on last page', () => {
    render(<Pagination currentPage={5} totalPages={5} showFirstLast />);
    expect(screen.getByLabelText('Last page')).toBeDisabled();
  });

  it('calls onChange when page button is clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Pagination currentPage={1} totalPages={5} onChange={handleChange} />);

    await user.click(screen.getByLabelText('Page 2'));
    expect(handleChange).toHaveBeenCalledWith(2);
  });

  it('calls onChange when next button is clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Pagination currentPage={2} totalPages={5} onChange={handleChange} />);

    await user.click(screen.getByLabelText('Next page'));
    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it('calls onChange when prev button is clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Pagination currentPage={2} totalPages={5} onChange={handleChange} />);

    await user.click(screen.getByLabelText('Previous page'));
    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it('shows ellipsis for many pages', () => {
    render(<Pagination currentPage={10} totalPages={50} maxVisiblePages={7} />);
    const ellipsis = screen.getAllByText('...');
    expect(ellipsis.length).toBeGreaterThan(0);
  });

  it('applies size class', () => {
    const { container } = render(<Pagination currentPage={1} totalPages={5} size="lg" />);
    expect(container.querySelector('.pagination')).toHaveClass('pagination-lg');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Pagination currentPage={1} totalPages={5} className="custom-class" />,
    );
    expect(container.querySelector('.pagination')).toHaveClass('pagination', 'custom-class');
  });

  it('does not call onChange when clicking current page', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Pagination currentPage={2} totalPages={5} onChange={handleChange} />);

    await user.click(screen.getByLabelText('Page 2'));
    expect(handleChange).not.toHaveBeenCalled();
  });
});
