/*
**  Post items displayed in the NewsFeed
*/

import React from 'react'
import styled from 'styled-components'
import COLORS from 'CONSTANTS/Colors'
import moment from 'moment'

/* STYLES */
const Post = styled.div`
  border: 1px solid ${COLORS.LIGHT_GREY};
  border-radius: 2px;
  padding: 20px;
`

const Content = styled.p`
  color: ${COLORS.BLACK};
  font-size: 18px;
`

const Date = styled.h5`
  color: ${COLORS.SILVER};
  font-size: 12px;
`

const Title = styled.h6`

`

export default ({
  id,
  title,
  content,
  user
}) => (
  <Post>
    <Title>{title}</Title>
    <Content>{user.username} said: {content}</Content>
    <Date>{moment(new Date()).subtract(20, 'minutes').fromNow()}</Date>
  </Post>
)