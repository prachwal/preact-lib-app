import { useTranslation } from 'preact-i18next';

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="page error-page not-found-page">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <h2>{t('pages.notFound.title')}</h2>
        <p>{t('pages.notFound.message')}</p>
        <a href="/" className="button button-primary">
          {t('pages.notFound.backHome')}
        </a>
      </div>
    </div>
  );
}
