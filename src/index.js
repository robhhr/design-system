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
  const [showModal, setShowModal] = useState(true)
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
      <Toggle onClick={() => setIsDarkTheme(!isDarkTheme)}>
        {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
      </Toggle>
      <Toggle onClick={() => setShowModal(!showModal)}>
        {showModal ? 'Hide Modal' : 'Toggle Modal'}
      </Toggle>
      <SignUpModal showModal={showModal} setShowModal={setShowModal} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
