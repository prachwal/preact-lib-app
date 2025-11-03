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
      <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>Content Above</div>
      <Spacer {...args} />
      <div style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>Content Below</div>
    </div>
  ),
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
  },
  render: (args) => (
    <div>
      <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>Content Above</div>
      <Spacer {...args} />
      <div style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>Content Below (XS spacing)</div>
    </div>
  ),
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => (
    <div>
      <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>Content Above</div>
      <Spacer {...args} />
      <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>Content Below (SM spacing)</div>
    </div>
  ),
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => (
    <div>
      <div style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>Content Above</div>
      <Spacer {...args} />
      <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>Content Below (LG spacing)</div>
    </div>
  ),
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
  render: (args) => (
    <div>
      <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>Content Above</div>
      <Spacer {...args} />
      <div style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>Content Below (XL spacing)</div>
    </div>
  ),
};

export const DoubleExtraLarge: Story = {
  args: {
    size: '2xl',
  },
  render: (args) => (
    <div>
      <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>Content Above</div>
      <Spacer {...args} />
      <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>Content Below (2XL spacing)</div>
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
      <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>Section 1</div>
      <Spacer {...args} />
      <div style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>Section 2</div>
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
      <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>Content Above</div>
      <Spacer {...args} />
      <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '10px', borderRadius: '4px' }}>
        Content Below (MD on mobile, LG on medium+ screens)
      </div>
    </div>
  ),
};
