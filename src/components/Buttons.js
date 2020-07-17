import styled from 'styled-components'
import {defaultTheme, typeScale} from '../utils'

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  font-family: 'Cabin', monospace;
  cursor: pointer;
  min-width: 100px;
  border-radius: 2px;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary};
  }
  &:focus {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary};
    border: 3px solid ${defaultTheme.primaryColor};
  }
  &:active {
    background-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorOnPrimary};
  }
`

const PrimaryButton = styled(Button)`
  border: 3px solid ${defaultTheme.primaryColor};
  color: #fff;
  background-color: ${defaultTheme.primaryColor};

  &:disabled {
    border: none;
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
`

const SecondaryButton = styled(Button)`
  border: 3px solid ${defaultTheme.primaryColor};
  &:disabled {
    background: none;
    border: 1px solid ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
`

const TertiaryButton = styled(Button)`
  border: 3px solid ${defaultTheme.secondaryColor};
  &:disabled {
    border: none;
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
`

export {PrimaryButton, SecondaryButton, TertiaryButton}
