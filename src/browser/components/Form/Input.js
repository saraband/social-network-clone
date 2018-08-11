import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from 'CONSTANTS/Colors'

const StyledInputContainer = styled.div`
  position: relative;
  width: 200px;
`

const Label = styled.label`
  position: absolute;
  z-index: 41;
  top: 6px;
  left: 6px;
  transition: all 0.2s ease-in-out;
  color: ${COLORS.SILVER}
`
const t = 't'
const StyledInput = styled.input.attrs({
  type: 'text'
})`
  position: absolute;
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${COLORS.SILVER};
  font-size: 14px;
  padding: 6px;
  background-color: transparent;
  z-index: 42;
  
  &:focus + label {
    top: -14px;
    font-size: 12px;
  }
`

export default class Input extends React.PureComponent {
  render() {
    const {
      label,
      ...props
    } = this.props

    return(
      <StyledInputContainer {...props}>
        <StyledInput />
        {label && <Label>{label}</Label>}
      </StyledInputContainer>
    )
  }

  static propTypes = {
    label: PropTypes.string
  }
}