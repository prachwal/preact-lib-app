import type { Meta, StoryObj } from '@storybook/preact';
import { Switch, type SwitchProps } from '.';

const meta: Meta<SwitchProps> = {
  title: 'Components/Forms/Switch',
  tags: ['autodocs'],
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<SwitchProps>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const Checked: Story = {
  args: {
    label: 'Notifications enabled',
    checked: true,
  },
};

export const WithOnOffLabels: Story = {
  args: {
    label: 'Dark mode',
    onLabel: 'ON',
    offLabel: 'OFF',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and on',
    disabled: true,
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Toggle feature',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" />
      <Switch size="lg" label="Large switch" />
    </div>
  ),
};

export const Examples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch label="Email notifications" />
      <Switch label="Push notifications" checked />
      <Switch label="SMS notifications" />
      <Switch label="Weekly newsletter" checked />
      <Switch label="Marketing emails" disabled />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch label="Off state" />
      <Switch label="On state" checked />
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" disabled checked />
    </div>
  ),
};
