import { useTranslation } from 'preact-i18next';

export function ErrorPage() {
  const { t } = useTranslation();

  return (
    <div className="page error-page server-error-page">
      <div className="error-content">
        <h1 className="error-code">500</h1>
        <h2>{t('pages.error.title')}</h2>
        <p>{t('pages.error.message')}</p>
        <a href="/" className="button button-primary">
          {t('pages.error.backHome')}
        </a>
      </div>
    </div>
  );
}
