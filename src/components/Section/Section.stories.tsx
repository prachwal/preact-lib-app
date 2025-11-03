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
    children: 'Section content',
  },
};
