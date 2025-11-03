import type { Meta, StoryObj } from '@storybook/preact';
import { Radio, type RadioProps } from '.';

const meta: Meta<RadioProps> = {
  title: 'Components/Forms/Radio',
  tags: ['autodocs'],
  component: Radio,
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
    error: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<RadioProps>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'radio-group',
  },
};

export const Checked: Story = {
  args: {
    label: 'Selected option',
    name: 'radio-group',
    checked: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'This option has an error',
    name: 'radio-group',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    name: 'radio-group',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and selected',
    name: 'radio-group',
    disabled: true,
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    name: 'radio-group',
    'aria-label': 'Radio without visible label',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio size="sm" label="Small radio" name="size-group-1" />
      <Radio size="md" label="Medium radio" name="size-group-2" />
      <Radio size="lg" label="Large radio" name="size-group-3" />
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>Select your preferred contact method:</h3>
      <Radio label="Email" name="contact-method" value="email" />
      <Radio label="Phone" name="contact-method" value="phone" checked />
      <Radio label="Text message" name="contact-method" value="text" />
      <Radio label="Mail" name="contact-method" value="mail" />
    </div>
  ),
};

export const HorizontalGroup: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: '0.5rem' }}>Gender:</h3>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Radio label="Male" name="gender" value="male" />
        <Radio label="Female" name="gender" value="female" />
        <Radio label="Other" name="gender" value="other" />
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio label="Unchecked" name="state-1" />
      <Radio label="Checked" name="state-2" checked />
      <Radio label="Error state" name="state-3" error />
      <Radio label="Disabled" name="state-4" disabled />
      <Radio label="Disabled checked" name="state-5" disabled checked />
    </div>
  ),
};
