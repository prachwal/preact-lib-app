import type { Meta, StoryObj } from '@storybook/preact';
import { Search, type SearchProps } from '.';

const meta: Meta<SearchProps> = {
  title: 'Components/Special/Search',
  tags: ['autodocs'],
  component: Search,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<SearchProps>;

export const Default: Story = {
  args: {
    children: 'Search content',
  },
};
