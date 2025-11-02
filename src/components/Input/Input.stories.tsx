import type { Meta, StoryObj } from '@storybook/preact';
import { Input, type InputProps } from '.';

const meta: Meta<InputProps> = {
  title: 'Components/Forms/Input',
  tags: ['autodocs'],
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outlined', 'underlined'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
    },
    disabled: {
      control: 'boolean',
    },
    floatingLabel: {
      control: 'boolean',
    },
    showClearButton: {
      control: 'boolean',
    },
    characterCounter: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Username',
    placeholder: 'Enter username',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const Underlined: Story = {
  args: {
    variant: 'underlined',
    label: 'Full Name',
    placeholder: 'John Doe',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    helperText: 'We will never share your email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    state: 'error',
    errorText: 'Please enter a valid email address',
    value: 'invalid-email',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Username',
    placeholder: 'username',
    state: 'success',
    successText: 'Username is available',
    value: 'johndoe',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    required: true,
  },
};

export const FloatingLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    floatingLabel: true,
  },
};

export const WithPrefixIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    prefixIcon: '🔍',
  },
};

export const WithSuffixIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    suffixIcon: '✉️',
  },
};

export const WithClearButton: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    showClearButton: true,
    value: 'search query',
  },
};

export const WithCharacterCounter: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    characterCounter: true,
    maxLength: 100,
    value: 'I love coding',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    disabled: true,
    value: 'disabled@example.com',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input size="xs" label="Extra Small" placeholder="xs input" />
      <Input size="sm" label="Small" placeholder="sm input" />
      <Input size="md" label="Medium" placeholder="md input" />
      <Input size="lg" label="Large" placeholder="lg input" />
      <Input size="xl" label="Extra Large" placeholder="xl input" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input variant="default" label="Default" placeholder="default variant" />
      <Input variant="filled" label="Filled" placeholder="filled variant" />
      <Input variant="outlined" label="Outlined" placeholder="outlined variant" />
      <Input variant="underlined" label="Underlined" placeholder="underlined variant" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input label="Default" placeholder="default state" value="some text" />
      <Input
        label="Error"
        state="error"
        errorText="This field has an error"
        placeholder="error state"
        value="invalid"
      />
      <Input
        label="Success"
        state="success"
        successText="Looks good!"
        placeholder="success state"
        value="valid"
      />
      <Input
        label="Warning"
        state="warning"
        helperText="Please verify this"
        placeholder="warning state"
        value="check"
      />
    </div>
  ),
};
