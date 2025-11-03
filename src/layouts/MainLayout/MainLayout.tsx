import type { ComponentChildren } from 'preact';
import { AppHeader } from '@/layouts/AppHeader';
import { AppFooter } from '@/layouts/AppFooter';
import { AppMain } from '@/layouts/AppMain';
import { Sidebar } from '@/layouts/Sidebar';

interface MainLayoutProps {
  children: ComponentChildren;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-layout">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <AppHeader />
      <div className="app-container">
        <Sidebar />
        <AppMain>{children}</AppMain>
      </div>
      <AppFooter />
    </div>
  );
}
