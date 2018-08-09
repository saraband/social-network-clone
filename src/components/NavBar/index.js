import React, { PureComponent } from 'react'
import styled from 'styled-components'
import COLORS from 'CONSTANTS/Colors'

const StyledNavBar = styled.div`
  background-color: ${COLORS.BLUE};
  color: ${COLORS.WHITE};
  padding: 15px;
`

export default class NavBar extends PureComponent {
  render() {
    return(
      <StyledNavBar>
        <h3>Social Network</h3>
      </StyledNavBar>
    )
  }
}