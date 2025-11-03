import type { Meta, StoryObj } from '@storybook/preact';
import { Section, type SectionProps } from '.';

const meta: Meta<SectionProps> = {
  title: 'Components/Layout/Section',
  tags: ['autodocs'],
  component: Section,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<SectionProps>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ textAlign: 'center' }}>
        <h2>Default Section</h2>
        <p>This is a semantic section with default spacing</p>
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: (
      <div style={{ textAlign: 'center' }}>
        <h2>Small Section</h2>
        <p>Reduced vertical padding for compact layouts</p>
      </div>
    ),
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: (
      <div style={{ textAlign: 'center' }}>
        <h2>Medium Section</h2>
        <p>Standard vertical padding</p>
      </div>
    ),
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: (
      <div style={{ textAlign: 'center' }}>
        <h2>Large Section</h2>
        <p>Generous vertical padding for emphasis</p>
      </div>
    ),
  },
};

export const PrimaryBackground: Story = {
  args: {
    background: 'primary',
    children: (
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h2>Primary Background</h2>
        <p>Section with primary color background</p>
      </div>
    ),
  },
};

export const GrayBackground: Story = {
  args: {
    background: 'gray',
    children: (
      <div style={{ textAlign: 'center' }}>
        <h2>Gray Background</h2>
        <p>Section with subtle gray background</p>
      </div>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    background: 'primary',
    children: (
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h2>Full Width Section</h2>
        <p>Extends to full viewport width</p>
      </div>
    ),
  },
};

export const Contained: Story = {
  args: {
    contained: true,
    background: 'gray',
    children: (
      <div style={{ textAlign: 'center' }}>
        <h2>Contained Section</h2>
        <p>Content constrained to max-width container</p>
      </div>
    ),
  },
};

export const WithDivider: Story = {
  args: {
    divider: true,
    size: 'lg',
    children: (
      <div style={{ textAlign: 'center' }}>
        <h2>Section with Divider</h2>
        <p>Bottom border divider for visual separation</p>
      </div>
    ),
  },
};
