import type { Meta, StoryObj } from '@storybook/preact';
import { Select, type SelectProps } from '.';

const meta: Meta<SelectProps> = {
  title: 'Components/Forms/Select',
  tags: ['autodocs'],
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<SelectProps>;

const countryOptions = [
  { value: '', label: 'Select a country' },
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
];

export const Default: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    helperText: 'Select your country of residence',
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    errorText: 'Please select a country',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    successText: 'Valid selection',
    value: 'us',
  },
};

export const Required: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    disabled: true,
    value: 'us',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Select size="sm" label="Small" options={countryOptions} />
      <Select size="md" label="Medium" options={countryOptions} />
      <Select size="lg" label="Large" options={countryOptions} />
    </div>
  ),
};

export const WithCustomOptions: Story = {
  render: () => (
    <Select label="Priority">
      <option value="">Select priority</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
      <option value="urgent">Urgent</option>
    </Select>
  ),
};

export const WithOptGroups: Story = {
  render: () => (
    <Select label="Food">
      <option value="">Select food</option>
      <optgroup label="Fruits">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </optgroup>
      <optgroup label="Vegetables">
        <option value="carrot">Carrot</option>
        <option value="broccoli">Broccoli</option>
        <option value="spinach">Spinach</option>
      </optgroup>
    </Select>
  ),
};
