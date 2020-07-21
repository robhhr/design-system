import styled from 'styled-components'
import {typeScale} from '../utils'
import {applyStyleModifiers} from 'styled-components-modifiers'

const BUTTON_MODS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.paragraph}
    padding: 16px 24px
  `,
  warning: ({props}) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
      outline: 3px solid ${props.theme.status.warningColorActive};
      border: none;
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }
  `,
  warningPrimary: ({props}) => `
    background: none;
    border: 2px solid ${props.theme.status.warningColor};
    color: ${props.theme.status.warningColor};
  `,
  warningSecondary: ({props}) => `
    background: none;
    border: 2px solid ${props.theme.status.warningColor};
    color: ${props.theme.status.warningColor};
  `,
  warningTertiary: ({props}) => `
    background: none;
    border: 2px solid ${props.theme.status.warningColor};
    color: ${props.theme.textColorOnPrimary}
  `,
  error: ({props}) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
    border: 1px solid ${props.theme.status.errorColor};

      &:hover, &:focus {
        background-color: ${props.theme.status.errorColorHover};
        outline: 3px solid ${props.theme.status.errorColorActive};
        border: none;
      };

      &:active {
        background-color: ${props.theme.status.errorColorActive}
      }
  `,
  success: ({props}) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};
    border: 1px solid ${props.theme.status.successColor};

      &:hover, &:focus {
        background-color: ${props.theme.status.successColorHover};
        outline: 3px solid ${props.theme.status.successColorActive};
        border: none;
      };

      &:active {
        background-color: ${props.theme.status.successColorActive}
      }
  `,
}

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  font-family: 'Cabin', monospace;
  cursor: pointer;
  min-width: 100px;
  border-radius: 2px;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${props => props.primaryColorHover};
    color: ${props => props.textColorOnPrimary};
  }
  &:focus {
    background-color: ${props => props.primaryColorHover};
    color: ${props => props.textColorOnPrimary};
    border: 3px solid ${props => props.primaryColor};
  }
  &:active {
    background-color: ${props => props.primaryColorActive};
    color: ${props => props.textColorOnPrimary};
  }
`

const PrimaryButton = styled(Button)`
  border: 3px solid ${props => props.primaryColor};
  color: #fff;
  background-color: ${props => props.primaryColor};

  &:disabled {
    border: none;
    background-color: ${props => props.disabled};
    color: ${props => props.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODS)}
`

const SecondaryButton = styled(Button)`
  border: 3px solid ${props => props.primaryColor};
  &:disabled {
    background: none;
    border: 1px solid ${props => props.disabled};
    color: ${props => props.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODS)}
`

const TertiaryButton = styled(Button)`
  border: 3px solid ${props => props.secondaryColor};
  &:disabled {
    border: none;
    background: none;
    color: ${props => props.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODS)}
`

export {PrimaryButton, SecondaryButton, TertiaryButton}
