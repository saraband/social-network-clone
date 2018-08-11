import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import COLORS from 'CONSTANTS/Colors'
import { Flex } from 'MISC/Styles'
import {
  NEWS_FEED,
  PROFILE
} from 'ROUTES'
import Logo from 'ICONS/Logo'

const StyledNavBar = Flex.extend.attrs({
  justify: 'space-between',
  align: 'center'
})`
  background-color: ${COLORS.BLUE};
  color: ${COLORS.WHITE};
  padding: 15px;
`

const HomeLink = styled(Link)`
  color: ${COLORS.WHITE};
  margin-left: 15px;
  font-size: 25px;
`

const ProfileSlot = styled.div`
  
`

export default class NavBar extends PureComponent {
  render() {
    return(
      <StyledNavBar>
        <Flex align='center'>
          <Logo height={30} />
          <HomeLink to={NEWS_FEED}>Social Network</HomeLink>
        </Flex>
        <ProfileSlot>
          <Link to={PROFILE}>Your profile</Link>
        </ProfileSlot>
      </StyledNavBar>
    )
  }
}