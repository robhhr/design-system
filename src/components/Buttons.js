import styled from 'styled-components'
import {defaultTheme, typeScale} from '../utils'

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  font-family: 'Cabin', monospace;
  cursor: pointer;
  min-width: 100px;
  border-radius: 5px;
`

const PrimaryButton = styled(Button)`
  border: none;
  color: #fff;
  background-color: ${defaultTheme.primaryColor};
`

const SecondaryButton = styled(Button)`
  border: 3px solid ${defaultTheme.primaryColor};
`

const TertiaryButton = styled(Button)`
  border: 3px solid ${defaultTheme.secondaryColor};
`

export {PrimaryButton, SecondaryButton, TertiaryButton}
