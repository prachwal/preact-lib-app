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
    searchable: {
      control: 'boolean',
    },
    multiple: {
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

const groupedFoodOptions = [
  {
    label: 'Fruits',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'grape', label: 'Grape' },
    ],
  },
  {
    label: 'Vegetables',
    options: [
      { value: 'carrot', label: 'Carrot' },
      { value: 'broccoli', label: 'Broccoli' },
      { value: 'spinach', label: 'Spinach' },
      { value: 'tomato', label: 'Tomato' },
      { value: 'cucumber', label: 'Cucumber' },
    ],
  },
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

export const Searchable: Story = {
  args: {
    label: 'Country (Searchable)',
    options: countryOptions,
    searchable: true,
    placeholder: 'Search and select...',
  },
};

export const MultipleSelect: Story = {
  args: {
    label: 'Countries (Multiple)',
    options: countryOptions,
    multiple: true,
    searchable: true,
    placeholder: 'Select countries...',
  },
};

export const WithGroups: Story = {
  args: {
    label: 'Food',
    options: groupedFoodOptions,
  },
};

export const SearchableWithGroups: Story = {
  args: {
    label: 'Food (Searchable with Groups)',
    options: groupedFoodOptions,
    searchable: true,
    placeholder: 'Search food...',
  },
};

export const MultipleWithGroups: Story = {
  args: {
    label: 'Food (Multiple with Groups)',
    options: groupedFoodOptions,
    multiple: true,
    searchable: true,
    placeholder: 'Select multiple foods...',
  },
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

export const AllFeatures: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <Select
        label="Standard Select"
        options={countryOptions}
        helperText="Native select element"
      />
      <Select
        label="Searchable Select"
        options={countryOptions}
        searchable
        placeholder="Search countries..."
      />
      <Select
        label="Multiple Select"
        options={countryOptions}
        multiple
        searchable
        placeholder="Select multiple countries..."
      />
      <Select
        label="Grouped Options"
        options={groupedFoodOptions}
        searchable
        placeholder="Search food..."
      />
      <Select
        label="Multiple with Groups"
        options={groupedFoodOptions}
        multiple
        searchable
        placeholder="Select multiple foods..."
      />
    </div>
  ),
};
