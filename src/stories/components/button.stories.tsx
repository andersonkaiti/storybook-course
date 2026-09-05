import { Button } from '@components/ui/button'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'components/button',
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      control: 'select',
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: {
        type: 'select',
        labels: {
          sm: 'sm (small)',
          lg: 'lg (large)',
        },
      },
    },
    disabled: {
      control: 'boolean',
    },
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
  render: (props) => (
    <Button {...props}>
      <span>🔥</span>
      Secondary
    </Button>
  ),
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
}
