import React, { PureComponent } from 'react'
import styled from 'styled-components'

/* STYLES */
const StyledSwitchButton = styled.div.attrs({
  tabIndex: '0'
})`
  border-radius: 100px;
  border: 1px solid blue;
  width: 100px;
  height: 50px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  padding-left: ${props => props.toggled ? '50px' : '0'};
  
  &:focus {
    outline: 0;
   }
`

const Button = styled.div`
  border-radius: 100px;
  background-color: red;
  width: 50px;
  height: 50px;
`

export default ({ toggled, onClick }) => (
  <StyledSwitchButton
    toggled={toggled}
    onClick={() => onClick(!toggled)}>
    <Button/>
  </StyledSwitchButton>
)