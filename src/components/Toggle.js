import React from 'react'
import styled from 'styled-components'

const Toggler = styled.button`
  margin: 15px 10px;
  padding: 8px;
  background: none;
`

const Toggle = ({onClick, children}) => {
  return <Toggler onClick={onClick}>{children}</Toggler>
}

export {Toggle}
