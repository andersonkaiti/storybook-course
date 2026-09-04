import { Button } from '@components/ui/button'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Button> = {
  component: Button,
  // Define o caminho e o nome (único) do componente na sidebar do Storybook
  title: 'components/button',
  parameters: {
    // Centraliza o componente no Canvas (o padrão é 'padded')
    layout: 'centered',
  },
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

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
}
