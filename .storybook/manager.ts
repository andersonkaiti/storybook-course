import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

const theme = create({
  base: 'dark',
  brandImage: 'http://github.com/andersonkaiti.png',
  appBg: '#000',
})

addons.setConfig({
  theme,
})
