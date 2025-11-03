import type { HTMLAttributes } from 'preact';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: string;
  maxItems?: number;
}

export const Breadcrumbs = ({
  items,
  separator = '/',
  maxItems,
  className = '',
  ...props
}: BreadcrumbsProps) => {
  const baseClass = 'breadcrumbs';
  const containerClasses = [baseClass, className].filter(Boolean).join(' ');

  let displayItems = items;
  if (maxItems && items.length > maxItems) {
    displayItems = [
      items[0],
      { label: '...', href: undefined },
      ...items.slice(-(maxItems - 2)),
    ];
  }

  return (
    <nav aria-label="breadcrumb" className={containerClasses} {...props}>
      <ol className="breadcrumbs-list">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const itemClasses = [
            'breadcrumbs-item',
            isLast ? 'breadcrumbs-item-current' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <li key={`${item.label}-${index}`} className={itemClasses}>
              {!isLast && item.href ? (
                <a href={item.href} className="breadcrumbs-link">
                  {item.label}
                </a>
              ) : !isLast && item.onClick ? (
                <button
                  type="button"
                  onClick={item.onClick}
                  className="breadcrumbs-button"
                >
                  {item.label}
                </button>
              ) : (
                <span className="breadcrumbs-text">{item.label}</span>
              )}
              {!isLast && <span className="breadcrumbs-separator">{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
