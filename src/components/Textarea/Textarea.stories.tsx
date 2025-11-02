import type { Meta, StoryObj } from '@storybook/preact';
import { Textarea, type TextareaProps } from '.';

const meta: Meta<TextareaProps> = {
  title: 'Components/Forms/Textarea',
  tags: ['autodocs'],
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outlined'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    autoResize: {
      control: 'boolean',
    },
    characterCounter: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<TextareaProps>;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    rows: 4,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Comments',
    placeholder: 'Add your comments...',
    rows: 4,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Feedback',
    placeholder: 'Your feedback...',
    rows: 4,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    helperText: 'Please provide a brief bio',
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter message...',
    errorText: 'Message is required',
    rows: 4,
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Review',
    placeholder: 'Write a review...',
    successText: 'Review submitted successfully',
    value: 'Great product!',
    rows: 4,
  },
};

export const WithCharacterCounter: Story = {
  args: {
    label: 'Tweet',
    placeholder: 'What\'s happening?',
    characterCounter: true,
    maxLength: 280,
    value: 'Hello world!',
    rows: 3,
  },
};

export const Required: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter message...',
    required: true,
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    value: 'This textarea is disabled',
    disabled: true,
    rows: 4,
  },
};

export const AutoResize: Story = {
  args: {
    label: 'Auto-resize',
    placeholder: 'Start typing...',
    autoResize: true,
    minHeight: '100px',
    maxHeight: '300px',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <Textarea size="sm" label="Small" placeholder="Small textarea" rows={3} />
      <Textarea size="md" label="Medium" placeholder="Medium textarea" rows={4} />
      <Textarea size="lg" label="Large" placeholder="Large textarea" rows={5} />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <Textarea variant="default" label="Default" placeholder="Default variant" rows={3} />
      <Textarea variant="filled" label="Filled" placeholder="Filled variant" rows={3} />
      <Textarea variant="outlined" label="Outlined" placeholder="Outlined variant" rows={3} />
    </div>
  ),
};
