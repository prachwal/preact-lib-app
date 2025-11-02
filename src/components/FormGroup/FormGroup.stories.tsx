import type { Meta, StoryObj } from '@storybook/preact';
import { FormGroup, type FormGroupProps } from '.';
import Input from '../Input';
import Textarea from '../Textarea';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Select from '../Select';

const meta: Meta<FormGroupProps> = {
  title: 'Components/Forms/FormGroup',
  tags: ['autodocs'],
  component: FormGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    required: {
      control: 'boolean',
    },
    optional: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<FormGroupProps>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    children: <Input placeholder="Enter your email" />,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    helperText: 'Password must be at least 8 characters',
    children: <Input type="password" placeholder="Enter password" />,
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    errorText: 'Username is already taken',
    children: <Input placeholder="Enter username" />,
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Email',
    successText: 'Email is available',
    children: <Input placeholder="email@example.com" />,
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    required: true,
    children: <Input placeholder="John Doe" />,
  },
};

export const Optional: Story = {
  args: {
    label: 'Middle Name',
    optional: true,
    children: <Input placeholder="Optional" />,
  },
};

export const WithTextarea: Story = {
  args: {
    label: 'Description',
    helperText: 'Provide a detailed description',
    children: <Textarea placeholder="Enter description..." rows={4} />,
  },
};

export const WithSelect: Story = {
  args: {
    label: 'Country',
    required: true,
    children: (
      <Select
        options={[
          { value: '', label: 'Select country' },
          { value: 'us', label: 'United States' },
          { value: 'uk', label: 'United Kingdom' },
        ]}
      />
    ),
  },
};

export const WithCheckboxGroup: Story = {
  render: () => (
    <FormGroup label="Interests" helperText="Select all that apply">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Checkbox label="Technology" />
        <Checkbox label="Sports" />
        <Checkbox label="Music" />
        <Checkbox label="Travel" />
      </div>
    </FormGroup>
  ),
};

export const WithRadioGroup: Story = {
  render: () => (
    <FormGroup label="Contact Preference" required>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Radio label="Email" name="contact" value="email" />
        <Radio label="Phone" name="contact" value="phone" />
        <Radio label="SMS" name="contact" value="sms" />
      </div>
    </FormGroup>
  ),
};

export const CompleteForm: Story = {
  render: () => (
    <form style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <FormGroup label="Full Name" required>
        <Input placeholder="John Doe" />
      </FormGroup>

      <FormGroup label="Email" required helperText="We'll never share your email">
        <Input type="email" placeholder="email@example.com" />
      </FormGroup>

      <FormGroup label="Country" required>
        <Select
          options={[
            { value: '', label: 'Select country' },
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom' },
          ]}
        />
      </FormGroup>

      <FormGroup label="Bio" optional>
        <Textarea placeholder="Tell us about yourself..." rows={4} />
      </FormGroup>

      <FormGroup label="Notifications">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Checkbox label="Email notifications" />
          <Checkbox label="SMS notifications" />
          <Checkbox label="Push notifications" />
        </div>
      </FormGroup>
    </form>
  ),
};
