import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  Toggle,
  SignUpModal,
} from './components'
import {GlobalStyle, darkTheme, defaultTheme} from './utils'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
      <Toggle onClick={() => setIsDarkTheme(!isDarkTheme)}>Dark Mode</Toggle>
      {isDarkTheme ? <p>Dark Theme Enabled</p> : <p>Dark Theme Disabled</p>}
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <TertiaryButton>Tertiary Button</TertiaryButton>
      <SignUpModal />
      <GlobalStyle />
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
