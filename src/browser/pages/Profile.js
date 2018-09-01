import React, { Component } from 'react'
import styled from 'styled-components'

/* STYLES */
const StyledProfile = styled.div`
  margin: auto;
`

export default class Profile extends Component {
  render() {
    const { userId } = this.props.match.params

    return(
      <StyledProfile>
        <p>Profile = {userId}</p>
      </StyledProfile>
    )
  }
}