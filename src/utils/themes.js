import {blue, green, yellow, red, neutral} from './colors'
import {primaryFont} from './typography'

const defaultTheme = {
  primaryColor: blue[200],
  primaryColorHover: blue[400],
  primaryColorActive: blue[300],
  secondaryColor: blue[400],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
}

const darkTheme = {
  primaryColor: neutral[600],
  primaryColorHover: neutral[200],
  primaryColorActive: neutral[100],
  textOnDisabled: neutral[300],
  textColorOnPrimary: neutral[400],
  textColor: blue[300],
  textColorInverted: neutral[100],
  primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
}

export {defaultTheme, darkTheme}
