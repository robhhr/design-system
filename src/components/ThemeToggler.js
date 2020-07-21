import React from 'react'
import styled from 'styled-components'

const Toggler = styled.button`
  margin: 0 16px 24px;
  padding: 8px;
  background: none;
`

const ThemeToggler = ({onClick, children}) => {
  return <Toggler onClick={onClick}>{children}</Toggler>
}

export {ThemeToggler}
