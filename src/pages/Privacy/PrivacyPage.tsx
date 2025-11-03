import { useTranslation } from 'preact-i18next';
import { Card } from '@/components/Card';

export function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <div className="page privacy-page">
      <div className="page-header">
        <h1>{t('pages.privacy.title')}</h1>
        <p className="page-subtitle">{t('pages.privacy.description')}</p>
      </div>

      <div className="page-content">
        <Card variant="outlined">
          <h2>Privacy Policy</h2>
          <p>
            This application is a demonstration project and does not collect or store
            any personal data.
          </p>
          <h3>Local Storage</h3>
          <p>
            The following data may be stored locally in your browser:
          </p>
          <ul>
            <li>Theme preference (light/dark/auto)</li>
            <li>Language preference</li>
          </ul>
          <h3>No Data Sharing</h3>
          <p>
            This application does not share any data with third parties. All preferences
            are stored locally in your browser and are never transmitted to any server.
          </p>
        </Card>
      </div>
    </div>
  );
}
