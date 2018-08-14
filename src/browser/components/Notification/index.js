import React from 'react'
import styled from 'styled-components'

const StyledNotification = styled.div`
  position: fixed;
  z-index: 50;
  right: 20px;
  bottom: 20px;
  max-width: 300px;
  background-color: red;
  border-radius: 3px;
  color: white;
  padding: 15px;
  box-sizing: border-box;
`

export default class Notification extends React.PureComponent {
  render() {
    return(
      <StyledNotification>
        This is a notification
      </StyledNotification>
    )
  }
}