import type { HTMLAttributes } from 'preact';

export type PaginationSize = 'sm' | 'md' | 'lg';

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  currentPage: number;
  totalPages: number;
  size?: PaginationSize;
  showFirstLast?: boolean;
  maxVisiblePages?: number;
  onChange?: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  size = 'md',
  showFirstLast = false,
  maxVisiblePages = 7,
  onChange,
  className = '',
  ...props
}: PaginationProps) => {
  const baseClass = 'pagination';
  const sizeClass = size !== 'md' ? `pagination-${size}` : '';
  const containerClasses = [baseClass, sizeClass, className].filter(Boolean).join(' ');

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onChange?.(page);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const halfVisible = Math.floor(maxVisiblePages / 2);
      let startPage = Math.max(1, currentPage - halfVisible);
      let endPage = Math.min(totalPages, currentPage + halfVisible);

      if (currentPage <= halfVisible) {
        endPage = maxVisiblePages;
      } else if (currentPage >= totalPages - halfVisible) {
        startPage = totalPages - maxVisiblePages + 1;
      }

      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) pages.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav aria-label="pagination" className={containerClasses} {...props}>
      <ul className="pagination-list">
        {showFirstLast && (
          <li>
            <button
              type="button"
              className="pagination-button pagination-button-first"
              onClick={() => handlePageClick(1)}
              disabled={currentPage === 1}
              aria-label="First page"
            >
              «
            </button>
          </li>
        )}
        <li>
          <button
            type="button"
            className="pagination-button pagination-button-prev"
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            ‹
          </button>
        </li>
        {pages.map((page, index) => (
          <li key={`${page}-${index}`}>
            {typeof page === 'number' ? (
              <button
                type="button"
                className={`pagination-button ${page === currentPage ? 'pagination-button-active' : ''}`}
                onClick={() => handlePageClick(page)}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </button>
            ) : (
              <span className="pagination-ellipsis">{page}</span>
            )}
          </li>
        ))}
        <li>
          <button
            type="button"
            className="pagination-button pagination-button-next"
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            ›
          </button>
        </li>
        {showFirstLast && (
          <li>
            <button
              type="button"
              className="pagination-button pagination-button-last"
              onClick={() => handlePageClick(totalPages)}
              disabled={currentPage === totalPages}
              aria-label="Last page"
            >
              »
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
