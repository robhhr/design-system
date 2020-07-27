import {create} from '@storybook/theming/create'
import {blue, neutral} from '../src/utils'

export default create({
  base: 'light',
  colorPrimary: `${blue[400]}`,
  colorSecondary: `${blue[200]}`,

  // UI
  appBg: `${neutral[100]}`,
  appContentBg: `${neutral[200]}`,
  appBorderColor: `${neutral[500]}`,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: `${neutral[600]}`,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: `${neutral[100]}`,
  barSelectedColor: `${neutral[300]}`,
  barBg: `${blue[400]}`,

  // Form colors
  inputBg: `${neutral[100]}`,
  inputBorder: `${neutral[500]}`,
  inputTextColor: `${neutral[600]}`,
  inputBorderRadius: 4,
})
