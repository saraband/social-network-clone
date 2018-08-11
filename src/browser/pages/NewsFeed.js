import React, { Component } from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Input from 'COMPONENTS/Form/Input'

const StyledNewsFeed = styled.div`
  margin: auto;
`

export default class Profile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <StyledNewsFeed>
        <p>News Feed</p>
        <Input />
      </StyledNewsFeed>
    )
  }
}