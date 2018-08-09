import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import COLORS from 'CONSTANTS/Colors'
import { Flex } from 'MISC/Styles'
import { NEWS_FEED } from 'ROUTES'

const StyledNavBar = Flex.extend.attrs({
  justify: 'space-between',
  align: 'center'
})`
  background-color: ${COLORS.BLUE};
  color: ${COLORS.WHITE};
  padding: 15px;
`

const ProfileSlot = styled.div`
  
`

export default class NavBar extends PureComponent {
  render() {
    return(
      <StyledNavBar>
        <h3><Link to={NEWS_FEED}>Social Network</Link></h3>
        <ProfileSlot>
          Your profile
        </ProfileSlot>
      </StyledNavBar>
    )
  }
}