import { Button } from '@components/ui/button'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Button',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}
