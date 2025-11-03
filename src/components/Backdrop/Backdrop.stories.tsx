import type { Meta, StoryObj } from '@storybook/preact';
import { Backdrop, type BackdropProps } from '.';

const meta: Meta<BackdropProps> = {
  title: 'Components/Backdrop',
  tags: ['autodocs'],
  component: Backdrop,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['dark', 'light'],
    },
    opacity: {
      control: { type: 'select' },
      options: ['low', 'normal', 'high'],
    },
    blur: {
      control: 'boolean',
    },
    show: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<BackdropProps>;

export const Default: Story = {
  args: {
    show: true,
  },
};

export const Light: Story = {
  args: {
    show: true,
    variant: 'light',
  },
};

export const WithBlur: Story = {
  args: {
    show: true,
    blur: true,
  },
};

export const LowOpacity: Story = {
  args: {
    show: true,
    opacity: 'low',
  },
};

export const HighOpacity: Story = {
  args: {
    show: true,
    opacity: 'high',
  },
};

export const Interactive: Story = {
  render: (args) => {
    return (
      <div style={{ position: 'relative', height: '400px' }}>
        <div style={{ padding: '20px', position: 'relative', zIndex: 1 }}>
          <h2>Content behind backdrop</h2>
          <p>Click the backdrop to dismiss</p>
        </div>
        <Backdrop {...args} onClick={() => alert('Backdrop clicked!')} />
      </div>
    );
  },
  args: {
    show: true,
  },
};
