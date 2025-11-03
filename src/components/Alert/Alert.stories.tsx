import type { Meta, StoryObj } from '@storybook/preact';
import { Alert, type AlertProps } from '.';

const meta: Meta<AlertProps> = {
  title: 'Components/Alert',
  tags: ['autodocs'],
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
    title: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<AlertProps>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational alert message.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your action was completed successfully!',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Please review this warning message carefully.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    children: 'An error occurred. Please try again.',
  },
};

export const WithoutTitle: Story = {
  args: {
    variant: 'info',
    children: 'This alert has no title, just a message.',
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'success',
    title: 'Dismissible Alert',
    children: 'You can close this alert by clicking the X button.',
    onClose: () => alert('Alert dismissed'),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert variant="info" title="Info">This is an info alert</Alert>
      <Alert variant="success" title="Success">This is a success alert</Alert>
      <Alert variant="warning" title="Warning">This is a warning alert</Alert>
      <Alert variant="error" title="Error">This is an error alert</Alert>
    </div>
  ),
};
