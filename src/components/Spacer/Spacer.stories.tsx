import type { Meta, StoryObj } from '@storybook/preact';
import { Spacer, type SpacerProps } from '.';

const meta: Meta<SpacerProps> = {
  title: 'Components/Layout/Spacer',
  tags: ['autodocs'],
  component: Spacer,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<SpacerProps>;

export const Default: Story = {
  args: {
    size: 'md',
  },
  render: (args) => (
    <div>
      <div style={{ background: '#e3f2fd', padding: '10px' }}>Content Above</div>
      <Spacer {...args} />
      <div style={{ background: '#f3e5f5', padding: '10px' }}>Content Below</div>
    </div>
  ),
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
  },
  render: (args) => (
    <div>
      <div style={{ background: '#e3f2fd', padding: '10px' }}>Content Above</div>
      <Spacer {...args} />
      <div style={{ background: '#f3e5f5', padding: '10px' }}>Content Below (XS spacing)</div>
    </div>
  ),
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => (
    <div>
      <div style={{ background: '#e8f5e9', padding: '10px' }}>Content Above</div>
      <Spacer {...args} />
      <div style={{ background: '#fff3e0', padding: '10px' }}>Content Below (SM spacing)</div>
    </div>
  ),
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => (
    <div>
      <div style={{ background: '#fce4ec', padding: '10px' }}>Content Above</div>
      <Spacer {...args} />
      <div style={{ background: '#e0f7fa', padding: '10px' }}>Content Below (LG spacing)</div>
    </div>
  ),
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
  render: (args) => (
    <div>
      <div style={{ background: '#ffebee', padding: '10px' }}>Content Above</div>
      <Spacer {...args} />
      <div style={{ background: '#e8eaf6', padding: '10px' }}>Content Below (XL spacing)</div>
    </div>
  ),
};

export const DoubleExtraLarge: Story = {
  args: {
    size: '2xl',
  },
  render: (args) => (
    <div>
      <div style={{ background: '#f1f8e9', padding: '10px' }}>Content Above</div>
      <Spacer {...args} />
      <div style={{ background: '#fff8e1', padding: '10px' }}>Content Below (2XL spacing)</div>
    </div>
  ),
};

export const WithDivider: Story = {
  args: {
    size: 'md',
    divider: true,
  },
  render: (args) => (
    <div>
      <div style={{ background: '#e3f2fd', padding: '10px' }}>Section 1</div>
      <Spacer {...args} />
      <div style={{ background: '#f3e5f5', padding: '10px' }}>Section 2</div>
    </div>
  ),
};

export const ResponsiveSpacing: Story = {
  args: {
    size: 'md',
    responsiveSize: 'md-lg',
  },
  render: (args) => (
    <div>
      <div style={{ background: '#e8f5e9', padding: '10px' }}>Content Above</div>
      <Spacer {...args} />
      <div style={{ background: '#fff3e0', padding: '10px' }}>
        Content Below (MD on mobile, LG on medium+ screens)
      </div>
    </div>
  ),
};
