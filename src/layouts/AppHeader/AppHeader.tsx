import { useSidebarStore } from '@/store/sidebarStore';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTranslation } from 'preact-i18next';

export function AppHeader() {
  const { toggle } = useSidebarStore();
  const { t } = useTranslation();

  return (
    <header className="app-header" role="banner">
      <div className="app-header-content">
        {/* Hamburger menu button - visible only on mobile */}
        <button
          className="hamburger-button"
          onClick={toggle}
          aria-label="Toggle menu"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* App title */}
        <p className="app-title">{t('app.title')}</p>

        {/* Right side - theme toggle */}
        <div className="app-header-actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
