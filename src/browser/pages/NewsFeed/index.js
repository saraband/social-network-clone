import React, { Component } from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import COLORS from 'CONSTANTS/Colors'
import Post from 'COMPONENTS/Post'

const GET_POSTS_LIST = gql`
  {
    postList {
      id,
      title,
      content,
      user {
        id,
        username
      }
    }
  }
`

const StyledNewsFeed = styled.div`
  margin: auto;
  width: 900px;
`

const data = {
  content: 'Hello world !',
  date: 2631384854
}

export default class Profile extends Component {
  render() {
    return(
      <StyledNewsFeed>
        <h3>News feed</h3>
        <Query query={GET_POSTS_LIST}>
          {({ loading, error, data }) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error</p>

            return data.postList.map(postData => (
              <Post key={postData.id} {...postData} />
            ))
          }}
        </Query>
      </StyledNewsFeed>
    )
  }
}