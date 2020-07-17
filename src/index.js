import React from 'react'
import ReactDOM from 'react-dom'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons'
import {GlobalStyle} from './utils'

const App = () => (
  <>
    <PrimaryButton>Hello World</PrimaryButton>
    <SecondaryButton>Hello World</SecondaryButton>
    <TertiaryButton>Hello World</TertiaryButton>
    <GlobalStyle />
  </>
)

ReactDOM.render(<App />, document.querySelector('#root'))
