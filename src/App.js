import React, { Component } from 'react'
import styled from 'styled-components'

const StyledApp = styled.div`
  background-color: red;
  color: white;
`

export default class App extends Component {
  render() {
    return(
      <StyledApp>
        <h1>Hello World</h1>
      </StyledApp>
    )
  }
}