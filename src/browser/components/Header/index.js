/*
**  Main navigation bar
*/

import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import COLORS from 'CONSTANTS/Colors'
import { Flex } from 'MISC/Styles'
import {
  NEWS_FEED_STATIC,
  PROFILE
} from 'ROUTES'
import Logo from 'ICONS/Logo'

/* STYLES */
const StyledHeader = Flex.extend.attrs({
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

export default class Header extends PureComponent {
  render() {
    const MY_PROFILE = PROFILE({
      userId: 42
    })

    console.log(MY_PROFILE)

    return(
      <StyledHeader>
        <Flex align='center'>
          <Logo height={30} />
          <HomeLink to={NEWS_FEED_STATIC}>Social Network</HomeLink>
        </Flex>
        <ProfileSlot>
          <Link to={MY_PROFILE}>Your profile</Link>
        </ProfileSlot>
      </StyledHeader>
    )
  }
}