import { useTranslation } from 'preact-i18next';
import { Card } from '@/components/Card';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="page home-page">
      <div className="page-header">
        <h1>{t('pages.home.title')}</h1>
        <p className="page-subtitle">{t('pages.home.subtitle')}</p>
      </div>

      <div className="page-content">
        <div className="grid-system grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card variant="elevated">
            <h3>Modern Components</h3>
            <p>A comprehensive collection of modern, reusable Preact components</p>
          </Card>
          <Card variant="elevated">
            <h3>Responsive Design</h3>
            <p>Mobile-first responsive layout that works on all devices</p>
          </Card>
          <Card variant="elevated">
            <h3>Dark Mode Support</h3>
            <p>Built-in theme support with light, dark, and auto modes</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
