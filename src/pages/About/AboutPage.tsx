import { useTranslation } from 'preact-i18next';
import { Card } from '@/components/Card';

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="page about-page">
      <div className="page-header">
        <h1>{t('pages.about.title')}</h1>
        <p className="page-subtitle">{t('pages.about.description')}</p>
      </div>

      <div className="page-content">
        <Card variant="outlined">
          <h2>About This Project</h2>
          <p>
            This is a modern Preact application showcasing a comprehensive component library
            with responsive design, theme support, and internationalization.
          </p>
          <h3>Features</h3>
          <ul>
            <li>Mobile-first responsive design</li>
            <li>Comprehensive component library</li>
            <li>Theme support (light/dark/auto)</li>
            <li>Internationalization with i18next</li>
            <li>State management with Zustand</li>
            <li>Routing with Preact ISO</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
