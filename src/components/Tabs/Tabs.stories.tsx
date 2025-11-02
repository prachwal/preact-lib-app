import type { Meta, StoryObj } from '@storybook/preact';
import { Tabs, type TabsProps } from '.';

const meta: Meta<TabsProps> = {
  title: 'Components/Navigation/Tabs',
  tags: ['autodocs'],
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['underline', 'boxed', 'pills'],
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<TabsProps>;

const sampleTabs = [
  { id: 'tab1', label: 'Profile', content: <div>Profile content here</div> },
  { id: 'tab2', label: 'Settings', content: <div>Settings content here</div> },
  { id: 'tab3', label: 'Messages', content: <div>Messages content here</div> },
];

export const Default: Story = {
  args: {
    tabs: sampleTabs,
  },
};

export const Boxed: Story = {
  args: {
    tabs: sampleTabs,
    variant: 'boxed',
  },
};

export const Pills: Story = {
  args: {
    tabs: sampleTabs,
    variant: 'pills',
  },
};

export const Vertical: Story = {
  args: {
    tabs: sampleTabs,
    orientation: 'vertical',
  },
};

export const WithIcons: Story = {
  args: {
    tabs: [
      { id: 'home', label: 'Home', icon: '🏠', content: <div>Home content</div> },
      { id: 'search', label: 'Search', icon: '🔍', content: <div>Search content</div> },
      { id: 'settings', label: 'Settings', icon: '⚙️', content: <div>Settings content</div> },
    ],
  },
};

export const WithDisabledTab: Story = {
  args: {
    tabs: [
      { id: 'tab1', label: 'Enabled', content: <div>Enabled tab</div> },
      { id: 'tab2', label: 'Disabled', content: <div>Disabled tab</div>, disabled: true },
      { id: 'tab3', label: 'Also Enabled', content: <div>Another enabled tab</div> },
    ],
  },
};

export const DefaultActive: Story = {
  args: {
    tabs: sampleTabs,
    defaultTab: 'tab2',
  },
};

export const RichContent: Story = {
  args: {
    tabs: [
      {
        id: 'overview',
        label: 'Overview',
        content: (
          <div style={{ padding: '1rem' }}>
            <h3>Dashboard Overview</h3>
            <p>Welcome to your dashboard. Here you can see an overview of your account.</p>
          </div>
        ),
      },
      {
        id: 'analytics',
        label: 'Analytics',
        content: (
          <div style={{ padding: '1rem' }}>
            <h3>Analytics</h3>
            <p>View detailed analytics and statistics here.</p>
            <ul>
              <li>Total users: 1,234</li>
              <li>Active sessions: 89</li>
              <li>Revenue: $12,345</li>
            </ul>
          </div>
        ),
      },
      {
        id: 'reports',
        label: 'Reports',
        content: (
          <div style={{ padding: '1rem' }}>
            <h3>Reports</h3>
            <p>Generate and download reports.</p>
          </div>
        ),
      },
    ],
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '500px' }}>
      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>Underline</h4>
        <Tabs tabs={sampleTabs} variant="underline" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>Boxed</h4>
        <Tabs tabs={sampleTabs} variant="boxed" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>Pills</h4>
        <Tabs tabs={sampleTabs} variant="pills" />
      </div>
    </div>
  ),
};
