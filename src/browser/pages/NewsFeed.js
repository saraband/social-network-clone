import React, { Component } from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

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
        <Query query={gql`
          {
            hello
          }
        `}>
          {({ loading, error, data }) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error !</p>

            return <p>{data.hello}</p>
          }}
        </Query>
      </StyledNewsFeed>
    )
  }
}