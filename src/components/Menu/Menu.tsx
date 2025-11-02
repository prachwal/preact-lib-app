import type { HTMLAttributes } from 'preact';

export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  divider?: boolean;
}

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  items: MenuItem[];
  open?: boolean;
  onClose?: () => void;
}

export const Menu = ({
  items,
  open = true,
  onClose,
  className = '',
  ...props
}: MenuProps) => {
  const baseClass = 'menu';
  const openClass = open ? 'menu-open' : 'menu-closed';
  const containerClasses = [baseClass, openClass, className].filter(Boolean).join(' ');

  const handleItemClick = (item: MenuItem) => {
    if (item.disabled) return;
    item.onClick?.();
    onClose?.();
  };

  if (!open) return null;

  return (
    <div className={containerClasses} role="menu" {...props}>
      <ul className="menu-list">
        {items.map((item, index) =>
          item.divider ? (
            <li key={`divider-${index}`} className="menu-divider" role="separator" />
          ) : (
            <li key={item.id} className="menu-item-wrapper">
              {item.href ? (
                <a
                  href={item.href}
                  className={`menu-item ${item.disabled ? 'menu-item-disabled' : ''}`}
                  role="menuitem"
                  aria-disabled={item.disabled}
                  onClick={(e) => {
                    if (item.disabled) {
                      e.preventDefault();
                      return;
                    }
                    handleItemClick(item);
                  }}
                >
                  {item.icon && <span className="menu-icon">{item.icon}</span>}
                  <span className="menu-label">{item.label}</span>
                </a>
              ) : (
                <button
                  type="button"
                  className={`menu-item ${item.disabled ? 'menu-item-disabled' : ''}`}
                  role="menuitem"
                  disabled={item.disabled}
                  onClick={() => handleItemClick(item)}
                >
                  {item.icon && <span className="menu-icon">{item.icon}</span>}
                  <span className="menu-label">{item.label}</span>
                </button>
              )}
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default Menu;
