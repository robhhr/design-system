import React from 'react'
import styled from 'styled-components'

const primaryColor = "#1c5391"

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

export default PrimaryButton