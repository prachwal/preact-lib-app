import type { Meta, StoryObj } from '@storybook/preact';
import { App } from './app';

const meta: Meta<typeof App> = {
  title: 'App',
  component: App,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The main App component showcasing Vite + Preact integration with interactive counter, logos, and links to documentation.',
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'dark';
      
      if (theme === 'auto') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', theme);
      }
      
      // Wrapper symulujący strukturę #app
      return (
        <div id="app">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {
  args: {},
};