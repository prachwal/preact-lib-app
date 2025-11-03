import type { Preview } from '@storybook/preact-vite'
import '../src/index.scss'
import './preview.scss'
import type { JSX } from 'preact'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true, // Wyłącz bo używamy własnego theme
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'auto', icon: 'mirror', title: 'Auto (System)' },
          { value: 'light', icon: 'circlehollow', title: 'Light' },
          { value: 'dark', icon: 'circle', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'auto'
      
      if (theme === 'auto') {
        // Usuń atrybut, pozwól działać @media query
        document.documentElement.removeAttribute('data-theme')
      } else {
        document.documentElement.setAttribute('data-theme', theme)
      }

      return <div id="app"><Story /></div>
    },
  ],
}

export default preview