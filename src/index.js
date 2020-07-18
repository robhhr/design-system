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
    <PrimaryButton modifiers={['small', 'success']}>Hello World</PrimaryButton>
    <SecondaryButton modifiers={['lage', 'warning', 'warningSecondary']}>
      Hello World
    </SecondaryButton>
    <TertiaryButton modifiers={['small', 'error']}>Hello World</TertiaryButton>
    <GlobalStyle />
  </>
)

ReactDOM.render(<App />, document.querySelector('#root'))
