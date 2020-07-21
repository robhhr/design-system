import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  ThemeToggler,
} from './components'
import {GlobalStyle, darkTheme, defaultTheme} from './utils'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
      <ThemeToggler onClick={() => setIsDarkTheme(!isDarkTheme)}>
        Dark Mode
      </ThemeToggler>
      {isDarkTheme ? <p>Dark Theme Enabled</p> : <p>Dark Theme Disabled</p>}
      <div
        style={{
          background: isDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: '100vw',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      ></div>
      <PrimaryButton>Hello World</PrimaryButton>
      <SecondaryButton>Hello World</SecondaryButton>
      <TertiaryButton>Hello World</TertiaryButton>
      <GlobalStyle />
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
