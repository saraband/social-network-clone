import React from 'react'
import styled from 'styled-components'
import COLORS from 'CONSTANTS/Colors'
import PropTypes from 'prop-types'

const Background = styled.div`
  position: absolute;
  z-index: 41;
  height: 300%;
  width: 50px;
  top: -100%;
  left: -100px;
  background-color: red;
  transform: rotate(45deg);
  background-color: ${COLORS.WHITE};
  opacity: 0.5;
  transition: all 0.4s ease-in-out;
`

const Button = styled.button`
  position: relative;
  overflow: hidden;
  border: 0;
  background-color: ${COLORS.BLUE};
  font-size: 20px;
  color: ${COLORS.WHITE};
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.4s ease-in-out;
  
  &:hover,
  &:focus {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }
  
  &:hover > div,
  &:focus > div {
    left: 150%;
  }
  
  &:focus {
    outline: 0;
  }
  
  &:active {
    opacity: 0.8;
  }
`

export default class PlainButton extends React.PureComponent {
  render() {
    const {
      onClick,
      children,
      ...props
    } = this.props

    return (
      <Button onClick={onClick} {...props}>
        {children}
        <Background/>
      </Button>
    )
  }

  static propTypes = {
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick: e => e.preventDefault()
  }
}