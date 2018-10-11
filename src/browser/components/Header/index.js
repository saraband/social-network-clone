/*
**  Main navigation bar
*/

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import COLORS from 'CONSTANTS/Colors'
import { Flex } from 'MISC/Styles'
import {
  NEWS_FEED,
  PROFILE,
  addParamsToUrl
} from 'ROUTES'
import Logo from 'ICONS/Logo'

/* STYLES */
const StyledHeader = styled(Flex).attrs({
  justify: 'space-between',
  align: 'center'
})`
  /* NSFW */
  /* background-color: ${COLORS.BLUE}; */
  background-color: #E5E5E5;
  color: ${COLORS.WHITE};
  padding: 15px;
`

const HomeLink = styled.a.attrs({
  href: NEWS_FEED
})`
  color: ${COLORS.WHITE};
  margin-left: 15px;
  font-size: 25px;
`

const ProfileSlot = styled.div`
  
`

class Header extends PureComponent {
  render() {
    const { lang } = this.props
    const MY_PROFILE = addParamsToUrl(PROFILE, {
      userId: 'naZ2Ty'
    })

    return(
      <StyledHeader>
        <Flex align='center'>
          <Logo height={30} />
          <HomeLink>Social Network</HomeLink>
        </Flex>
        <ProfileSlot>
          <Link to={MY_PROFILE}>Your profile</Link>
          <p>{lang}</p>
        </ProfileSlot>
      </StyledHeader>
    )
  }
}

export default connect(
  state => ({
    lang: state.lang
  })
)(Header)
