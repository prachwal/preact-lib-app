import { useTranslation } from 'preact-i18next';
import { Card } from '@/components/Card';

export function SettingsPage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="page settings-page">
      <div className="page-header">
        <h1>{t('pages.settings.title')}</h1>
        <p className="page-subtitle">{t('pages.settings.description')}</p>
      </div>

      <div className="page-content">
        <Card variant="outlined">
          <h2>Language Settings</h2>
          <p>Select your preferred language:</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button
              onClick={() => changeLanguage('en')}
              className={`button ${i18n.language === 'en' ? 'button-primary' : 'button-secondary'}`}
            >
              English
            </button>
            <button
              onClick={() => changeLanguage('pl')}
              className={`button ${i18n.language === 'pl' ? 'button-primary' : 'button-secondary'}`}
            >
              Polski
            </button>
          </div>
        </Card>

        <Card variant="outlined" style={{ marginTop: '1rem' }}>
          <h2>Theme Settings</h2>
          <p>Theme can be changed using the toggle in the header (top right).</p>
        </Card>
      </div>
    </div>
  );
}
