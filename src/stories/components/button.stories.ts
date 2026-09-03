import { Button } from '@components/ui/button'
import type { Meta } from '@storybook/react-vite'

const meta: Meta<typeof Button> = {
  component: Button,
  // args = props
  args: {
    children: 'Button',
  },
}

// toda story precisa exportar como default um objeto meta
export default meta

// para cada story, um objeto precisa ser exportado
export const Default = {}

export const Secondary = {}
