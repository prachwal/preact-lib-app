import type { Meta, StoryObj } from '@storybook/preact';
import { CodeBlock, type CodeBlockProps } from '.';

const meta: Meta<CodeBlockProps> = {
  title: 'Components/Special/CodeBlock',
  tags: ['autodocs'],
  component: CodeBlock,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<CodeBlockProps>;

export const Default: Story = {
  args: {
    children: 'CodeBlock content',
  },
};
