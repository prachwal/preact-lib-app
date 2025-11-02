import type { Meta, StoryObj } from '@storybook/preact'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Application/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {},
}