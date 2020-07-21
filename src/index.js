import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons'
import {GlobalStyle, darkTheme, defaultTheme} from './utils'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <ThemeProvider theme={darkTheme ? darkTheme : defaultTheme}>
      <PrimaryButton modifiers={['small', 'success']}>
        Hello World
      </PrimaryButton>
      <SecondaryButton modifiers={['lage', 'warning', 'warningSecondary']}>
        Hello World
      </SecondaryButton>
      <TertiaryButton modifiers={['small', 'error']}>
        Hello World
      </TertiaryButton>
      <GlobalStyle />
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
