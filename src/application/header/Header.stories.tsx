import type { Meta, StoryObj } from '@storybook/preact'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Application/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {},
}