import React from 'react'
import styled from 'styled-components'
import COLORS from 'CONSTANTS/Colors'
import { Flex } from 'MISC/Styles'
import Logo from 'ICONS/Logo'
import { SIGNUP } from 'ROUTES'
import { Link } from 'react-router-dom'

const StyledLoginPage = Flex.extend`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.BLUE};
  color: ${COLORS.WHITE};
  min-height: 100vh;
`

export default class Login extends React.Component {
  render() {
    return (
      <StyledLoginPage>
        <Logo width={100} />
        <p>Login</p>
        <Link to={SIGNUP}>Sign Up</Link>
      </StyledLoginPage>
    )
  }
}