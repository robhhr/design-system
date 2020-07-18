import styled from 'styled-components'
import {defaultTheme, typeScale} from '../utils'
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
  warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 3px solid ${defaultTheme.status.warningColorActive};
      border: none;
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  warningPrimary: () => `
    background: none;
    border: 2px solid ${defaultTheme.status.warningColor};
    color: ${defaultTheme.status.warningColor};
  `,
  warningSecondary: () => `
    background: none;
    border: 2px solid ${defaultTheme.status.warningColor};
    color: ${defaultTheme.status.warningColor};
  `,
  warningTertiary: () => `
    background: none;
    border: 2px solid ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorOnPrimary}
  `,
  error: () => `
    background-color: ${defaultTheme.status.errorColor};
    color: ${defaultTheme.textColorInverted};
    border: 1px solid ${defaultTheme.status.errorColor};

      &:hover, &:focus {
        background-color: ${defaultTheme.status.errorColorHover};
        outline: 3px solid ${defaultTheme.status.errorColorActive};
        border: none;
      };

      &:active {
        background-color: ${defaultTheme.status.errorColorActive}
      }
  `,
  success: () => `
    background-color: ${defaultTheme.status.successColor};
    color: ${defaultTheme.textColorInverted};
    border: 1px solid ${defaultTheme.status.successColor};

      &:hover, &:focus {
        background-color: ${defaultTheme.status.successColorHover};
        outline: 3px solid ${defaultTheme.status.successColorActive};
        border: none;
      };

      &:active {
        background-color: ${defaultTheme.status.successColorActive}
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

  ${applyStyleModifiers(BUTTON_MODS)}
`

const SecondaryButton = styled(Button)`
  border: 3px solid ${defaultTheme.primaryColor};
  &:disabled {
    background: none;
    border: 1px solid ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODS)}
`

const TertiaryButton = styled(Button)`
  border: 3px solid ${defaultTheme.secondaryColor};
  &:disabled {
    border: none;
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODS)}
`

export {PrimaryButton, SecondaryButton, TertiaryButton}
