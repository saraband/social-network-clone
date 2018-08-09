import React, { Component } from 'react'
import styled from 'styled-components'

const StyledNewsFeed = styled.div`
  margin: auto;
`

export default class Profile extends Component {
  render() {
    return(
      <StyledNewsFeed>
        <p>News Feed</p>
      </StyledNewsFeed>
    )
  }
}