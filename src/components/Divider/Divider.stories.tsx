import type { Meta, StoryObj } from '@storybook/preact';
import { Divider, type DividerProps } from '.';

const meta: Meta<DividerProps> = {
  title: 'Components/Divider',
  tags: ['autodocs'],
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    style: {
      control: { type: 'select' },
      options: ['solid', 'dashed', 'dotted'],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<DividerProps>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '100px', alignItems: 'center', gap: '1rem' }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};

export const WithText: Story = {
  args: {
    children: 'OR',
  },
};

export const Styles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Solid</p>
        <Divider style="solid" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Dashed</p>
        <Divider style="dashed" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Dotted</p>
        <Divider style="dotted" />
      </div>
    </div>
  ),
};

export const WithTextVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Divider>Section Title</Divider>
      <Divider>OR</Divider>
      <Divider>🎉</Divider>
    </div>
  ),
};

export const InContent: Story = {
  render: () => (
    <div>
      <p>This is some content above the divider.</p>
      <Divider />
      <p>This is some content below the divider.</p>
      <Divider>Section Break</Divider>
      <p>This is content in a new section.</p>
    </div>
  ),
};
