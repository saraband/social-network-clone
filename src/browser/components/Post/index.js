/*
**  Post items displayed in the NewsFeed
*/

import React from 'react'
import styled from 'styled-components'
import COLORS from 'CONSTANTS/Colors'
import { FONT_SIZE } from 'CONSTANTS/Style'
import moment from 'moment'

/* STYLES */
const StyledPost = styled.div`
  border: 1px solid ${COLORS.LIGHT_BLUE};
  border-radius: 2px;
  padding: 15px;
  margin: 20px;
`

const User = styled.h6`
  display: inline-block;
  font-size: ${FONT_SIZE.MEDIUM};
  color: ${COLORS.BLUE};
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 10px;
  
  &:hover {
    text-decoration: underline;
  }
`

const Content = styled.p`
  color: ${COLORS.BLACK};
  font-size: ${FONT_SIZE.BIG};
  margin-bottom: 10px;
`

const Tools = styled.div`
  display: flex;
`

const Button = styled.div`
font-size: ${FONT_SIZE.MEDIUM};
padding: 5px;
margin-right: 5px;
background-color: ${COLORS.BLUE};
color: ${COLORS.WHITE};
cursor: pointer;

&:hover {
  background-color: ${COLORS.LIGHT_BLUE};
}
`

const Date = styled.div`
  display: inline-block;
  color: ${COLORS.LIGHT_BLUE};
  font-size: ${FONT_SIZE.SMALL};
`

const Comments = styled.div`
  padding: 20px;
`

const Input = styled.textarea.attrs({
  placeholder: 'Write a comment here'
})`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${COLORS.LIGHT_BLUE};
  resize: none;
  height: 100px;
  padding: 10px;
  font-size: ${FONT_SIZE.MEDIUM};
  color: ${COLORS.BLUE};
  border-radius: 2px;
`

export default class Post extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      showComments: false
    }
  }
  render() {
    const { showComments } = this.state
    const {
      id,
      title,
      content,
      user,
      comments
    } = this.props

    return(
      <StyledPost>
        <User>{user.username}</User>
        <Date>{moment().subtract(20, 'minutes').fromNow()}</Date>
        <Content>{content}</Content>
        <Tools>
          <Button>Like</Button>
          <Button>Share</Button>
          <Button onClick={() => this.setState({ showComments: true })}>Comment</Button>
        </Tools>
        {showComments &&
          <Comments>
            <Input />
          </Comments>
        }
      </StyledPost>
    )
  }
};