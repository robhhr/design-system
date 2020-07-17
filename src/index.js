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
    <PrimaryButton disabled>Hello World</PrimaryButton>
    <SecondaryButton disabled>Hello World</SecondaryButton>
    <TertiaryButton disabled>Hello World</TertiaryButton>
    <GlobalStyle />
  </>
)

ReactDOM.render(<App />, document.querySelector('#root'))
