import { useSidebarStore } from '@/store/sidebarStore';
import { navigationConfig, type NavigationItem } from '@/router/navigation';
import { useEffect, useState } from 'preact/hooks';

export function Sidebar() {
  const { isOpen, close } = useSidebarStore();
  const [activeItem, setActiveItem] = useState<string>('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Close sidebar on mobile when clicking outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        close();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, close]);

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleItemClick = (item: NavigationItem) => {
    setActiveItem(item.id);
    if (!item.children && window.innerWidth < 1024) {
      close();
    }
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="sidebar-backdrop"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <nav className="sidebar-nav" role="navigation" aria-label="Main navigation">
          <ul>
            {navigationConfig.map((item) => (
              <li key={item.id} className="sidebar-item-wrapper">
              <a
                href={item.path}
                className={`sidebar-item ${activeItem === item.id ? 'active' : ''} ${
                  item.children ? 'has-children' : ''
                }`}
                aria-current={activeItem === item.id ? 'page' : undefined}
                onClick={(e) => {
                  if (item.children) {
                    e.preventDefault();
                    toggleExpanded(item.id);
                  } else {
                    handleItemClick(item);
                  }
                }}
                title={item.label}
              >
                {item.icon && (
                  <span className="sidebar-item-icon" data-icon={item.icon} aria-hidden="true">
                    {getIconSVG(item.icon)}
                  </span>
                )}
                <span className="sidebar-item-label">{item.label}</span>
                {item.children && (
                  <span
                    className={`sidebar-item-arrow ${
                      expandedItems.has(item.id) ? 'expanded' : ''
                    }`}
                  >
                    ▼
                  </span>
                )}
              </a>

              {/* Sub-menu */}
              {item.children && expandedItems.has(item.id) && (
                <div className="sidebar-submenu">
                  {item.children.map((child) => (
                    <a
                      key={child.id}
                      href={child.path}
                      className={`sidebar-subitem ${
                        activeItem === child.id ? 'active' : ''
                      }`}
                      onClick={() => handleItemClick(child)}
                    >
                      <span className="sidebar-subitem-label">{child.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

// Simple icon SVG helper
function getIconSVG(icon: string) {
  const icons: Record<string, preact.VNode> = {
    home: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    dashboard: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    info: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
    settings: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6m5.66-13.66l-4.24 4.24m-2.83 2.83l-4.24 4.24M23 12h-6m-6 0H1m18.66 5.66l-4.24-4.24m-2.83-2.83l-4.24-4.24" />
      </svg>
    ),
    shield: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  };

  return icons[icon] || icons.home;
}
