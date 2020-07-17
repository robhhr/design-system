import styled from 'styled-components'

const primaryColor = "#1c5391"
const secondaryColor = '#7090b5'

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-family: "Cabin", monospace;
  cursor: pointer;
  min-width: 100px;
  border-radius: 5px;
`

const PrimaryButton = styled(Button)`
  border: none;
  color: #FFF;
  background-color: ${primaryColor};
`

const SecondaryButton = styled(Button)`
  border: 3px solid ${primaryColor};
`

const TertiaryButton = styled(Button)`
  border: 3px solid ${secondaryColor};
`

export {PrimaryButton, SecondaryButton, TertiaryButton}