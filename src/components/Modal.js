import React from 'react'
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'
import {typeScale} from '../utils'
import {PrimaryButton} from './Buttons'
import {CloseIcon, SignUp} from '../assets/'

const ModalWrapper = styled.div`
  width: 600px;
  height: 500px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.theme.formElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  padding: 30px 0;
`
const SignUpTitle = styled.h1`
  font-size: ${typeScale.header1};
`

const SignUpText = styled.h4`
  font-size: ${typeScale.header4};
  text-align: center;
`

const SignUpModal = ({showModal, setShowModal}) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-50)`,
  })
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <CloseIcon
          aria-hidden="true"
          cursor="pointer"
          style={{position: 'absolute', top: '15px', right: '15px'}}
        />
        <SignUp />
        <SignUpTitle>Sign up today!</SignUpTitle>
        <SignUpText>Save your preferences anywhere</SignUpText>
        <PrimaryButton>Sign up now!</PrimaryButton>
      </ModalWrapper>
    </animated.div>
  )
}

export {SignUpModal}
