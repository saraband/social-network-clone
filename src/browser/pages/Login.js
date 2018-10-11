import React from 'react'
import styled from 'styled-components'
import COLORS from 'CONSTANTS/Colors'
import { Flex } from 'MISC/Styles'
import Logo from 'ICONS/Logo'
import { SIGNUP_STATIC } from 'ROUTES'
import { Link } from 'react-router-dom'
import Notification from 'COMPONENTS/Notification'

/* STYLES */
const StyledLoginPage = styled(Flex)`
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
        <Notification />
        <Logo width={100} />
        <p>Login</p>
        <Link to={SIGNUP_STATIC}>Sign Up</Link>
      </StyledLoginPage>
    )
  }
}
