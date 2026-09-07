import { Button } from '@components/ui/button'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'components/button',
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Button',
    onClick: fn(),
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
      table: {
        category: 'Appearance',
        type: {
          summary: 'enum',
          detail:
            "'default' | 'destructive' | 'outline' | 'secondary' |'ghost' | 'link'",
        },
        defaultValue: {
          summary: 'default',
        },
      },
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
      table: {
        category: 'Appearance',
        type: {
          summary: 'enum',
          detail: "'default' | 'sm' | 'lg' | 'icon'",
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    onClick: {
      table: {
        category: 'Event Listeners',
      },
    },
    onMouseEnter: {
      table: {
        category: 'Event Listeners',
        subcategory: 'Mouse events',
      },
    },
    onMouseLeave: {
      table: {
        category: 'Event Listeners',
        subcategory: 'Mouse events',
      },
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
