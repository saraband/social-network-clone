import React from 'react'
import styled from 'styled-components'
import COLORS from 'CONSTANTS/Colors'
import { Flex } from 'MISC/Styles'

const StyledChatContainer = Flex.extend`
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 20px;
  height: 40px;
  width: 150px;
  color: ${COLORS.BLACK};
  font-size: 14px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`

export default class Chat extends React.Component {
  render() {
    return(
      <StyledChatContainer>
        13 Chats availables.
      </StyledChatContainer>
    )
  }
}