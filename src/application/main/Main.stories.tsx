import type { Meta, StoryObj } from '@storybook/preact'
import { Main } from './Main'

const meta: Meta<typeof Main> = {
  title: 'Application/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Main>

export const Default: Story = {
  args: {},
}