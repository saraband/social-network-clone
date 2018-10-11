import React from 'react'
import styled from 'styled-components'
import Logo from 'ICONS/Logo'
import { Flex } from 'MISC/Styles'
import COLORS from 'CONSTANTS/Colors'
import Input from 'COMPONENTS/Form/Input'
import Button from 'COMPONENTS/Form/Buttons/PlainButton'
import v from 'MISC/Validate'

/* STYLES */
const StyledSignup = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const ButtonLogo = styled(Logo).attrs({
  width: 30
})`
  margin-right: 15px;
`

const Form = styled.form`
  border: 1px solid ${COLORS.SILVER};
  border-radius: 3px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`

const StyledInput = styled(Input)`
  margin-top: 70px;
  width: 250px;
  
  &:first-child {
    margin-top: 50px;
  }
  
  &:last-child {
    margin-bottom: 30px;
   }
`

const StyledButton = styled(Button)`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`

const Title = styled.h1`
  font-size: 30px;
  color: ${COLORS.BLUE};
  margin-bottom: 30px;
`

const Subtitle = styled.span`
  font-weight: 100;
  font-size: 20px;
  font-family: 'Open Sans Light';
  color: ${COLORS.GREY};
`

export default class Signup extends React.PureComponent {
  constructor(props) {
    super(props)

    // Form state
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  // Generic state handler
  // Requires a name attribute to work
  updateInput = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const {
      username,
      email,
      password,
      confirmPassword
    } = this.state

    return(
      <StyledSignup>
        <Title>Sign Up <Subtitle>Social Network</Subtitle></Title>
        <Form>
          <StyledInput
            label='Username'
            onErrorLabel='Username must be at least 4 characters and max 50'
            name='username'
            value={username}
            validate={v.username}
            onChange={this.updateInput}
            />
          <StyledInput
            label='E-mail'
            onErrorLabel='E-mail not valid.'
            name='email'
            value={email}
            validate={v.email}
            onChange={this.updateInput}
            />
          <StyledInput
            label='Password'
            onErrorLabel='Password must be at least 8 characters and contain one letter and one number.'
            name='password'
            type='password'
            value={password}
            validate={v.password}
            onChange={this.updateInput}
            />
          <StyledInput
            label='Confirm password'
            onErrorLabel='Password do not match.'
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            validate={v => v === password}
            onChange={this.updateInput}
            />
          <StyledButton onClick={e => e.preventDefault()}>
            <ButtonLogo />
            Sign Up
          </StyledButton>
        </Form>
      </StyledSignup>
    )
  }
}
