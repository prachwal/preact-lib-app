import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';
import { MainLayout } from '@/layouts/MainLayout';
import { HomePage } from '@/pages/Home';
import { DashboardPage } from '@/pages/Dashboard';
import { AboutPage } from '@/pages/About';
import { SettingsPage } from '@/pages/Settings';
import { PrivacyPage } from '@/pages/Privacy';
import { NotFoundPage } from '@/pages/Error';
import '@/i18n/config';

export function App() {
  return (
    <LocationProvider>
      <MainLayout>
        <Router>
          <Route path="/" component={HomePage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/dashboard/:tab" component={DashboardPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/settings" component={SettingsPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route default component={NotFoundPage} />
        </Router>
      </MainLayout>
    </LocationProvider>
  );
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app')!);
}

export async function prerender(data: any) {
  return await ssr(<App {...data} />);
}
