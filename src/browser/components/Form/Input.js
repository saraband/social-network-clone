import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from 'CONSTANTS/Colors'

/* STYLES */
const StyledInputContainer = styled.div`
  position: relative;
  height: 30px;
`

const Label = styled.label`
  position: absolute;
  z-index: 41;
  top: 6px;
  left: 6px;
  transition: all 0.2s ease-in-out;
  color: ${COLORS.GREY}
`
const StyledInput = styled.input`
  position: absolute;
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${COLORS.SILVER};
  font-size: 15px;
  padding: 10px;
  background-color: transparent;
  z-index: 42;
  
  ${props => props.error
    ? `border-color: ${COLORS.RED};`
    : ''
  }
  
  ${props => props.empty ? (
    `
    &:focus + label {
    top: -14px;
    font-size: 12px;
    }
    ` ) : (
    `
    + label {
      top: -14px;
      font-size: 12px;
    }
    `
)}
`

const ErrorLabel = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 15px;
  font-size: 12px;
  color: ${COLORS.RED};
`

export default class Input extends React.PureComponent {
  render() {
    const {
      label,
      value,
      name,
      type,
      onChange,
      validate,
      onErrorLabel,
      ...props
    } = this.props

    // The input is valid if empty
    // Or meets the requirement of the validate prop fn
    const isValid = !value || value && validate && validate(value)

    return(
      <StyledInputContainer {...props}>
        <StyledInput
          type={type}
          empty={!value}
          error={!isValid}
          value={value}
          name={name}
          onChange={onChange}
          autoComplete='off'
          />
        {label && <Label>{label}</Label>}
        {!isValid && <ErrorLabel>{onErrorLabel}</ErrorLabel>}
      </StyledInputContainer>
    )
  }

  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    validate: PropTypes.func,
    onErrorLabel: PropTypes.string
  }
}