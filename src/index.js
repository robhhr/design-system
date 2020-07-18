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
    <PrimaryButton modifiers="small">Hello World</PrimaryButton>
    <SecondaryButton modifiers="lage">Hello World</SecondaryButton>
    <TertiaryButton modifiers="small">Hello World</TertiaryButton>
    <GlobalStyle />
  </>
)

ReactDOM.render(<App />, document.querySelector('#root'))
