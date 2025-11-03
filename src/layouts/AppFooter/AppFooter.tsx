export function AppFooter() {
  const currentYear = new Date().getFullYear();
  const version = import.meta.env.VITE_APP_VERSION || '0.0.0';

  return (
    <footer role="contentinfo" className="app-footer">
      <div className="app-footer-content">
        <p>
          © {currentYear} Preact Component Library. All rights reserved.
        </p>
        <p className="app-footer-version">Version: {version}</p>
      </div>
    </footer>
  );
}
