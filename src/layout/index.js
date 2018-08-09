import React from 'react'
import styled from 'styled-components'
import NavBar from 'COMPONENTS/NavBar'

const StyledLayout = styled.div`
  width: 100vw;
`

export default ({ children }) => (
  <StyledLayout>
    <NavBar/>
    {children}
  </StyledLayout>
)