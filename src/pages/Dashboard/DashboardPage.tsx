import { useTranslation } from 'preact-i18next';
import { Tabs } from '@/components/Tabs';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { Alert } from '@/components/Alert';
import { Input } from '@/components/Input';
import { Checkbox } from '@/components/Checkbox';
import { Switch } from '@/components/Switch';

export function DashboardPage() {
  const { t } = useTranslation();

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: <DashboardOverview />,
    },
    {
      id: 'ui',
      label: t('nav.uiComponents'),
      content: <UIComponentsDemo />,
    },
    {
      id: 'forms',
      label: t('nav.formComponents'),
      content: <FormComponentsDemo />,
    },
  ];

  return (
    <div className="page dashboard-page">
      <div className="page-header">
        <h1>{t('pages.dashboard.title')}</h1>
        <p className="page-subtitle">{t('pages.dashboard.subtitle')}</p>
      </div>

      <div className="page-content">
        <Tabs tabs={tabs} defaultTab="overview" variant="underline" />
      </div>
    </div>
  );
}

function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      <h2>Component Statistics</h2>
      <p>Explore the various components available in this library.</p>
    </div>
  );
}

function UIComponentsDemo() {
  return (
    <div className="component-demo">
      <section>
        <h3>Buttons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>Badges</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>Alerts</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Alert variant="info">This is an info alert</Alert>
          <Alert variant="success">This is a success alert</Alert>
          <Alert variant="warning">This is a warning alert</Alert>
          <Alert variant="error">This is an error alert</Alert>
        </div>
      </section>
    </div>
  );
}

function FormComponentsDemo() {
  return (
    <div className="component-demo">
      <section>
        <h3>Input Fields</h3>
        <Input placeholder="Enter text..." label="Text Input" />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>Checkboxes</h3>
        <Checkbox label="Accept terms and conditions" />
        <Checkbox label="Subscribe to newsletter" />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>Switches</h3>
        <Switch label="Enable notifications" />
        <Switch label="Dark mode" />
      </section>
    </div>
  );
}
