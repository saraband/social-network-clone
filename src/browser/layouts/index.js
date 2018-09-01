/*
**  Main layout
*/

import React from 'react'
import styled from 'styled-components'
import Header from 'COMPONENTS/Header'

const StyledLayout = styled.div`
  width: 100vw;
`

export default ({ children }) => (
  <StyledLayout>
    <Header />
    {children}
  </StyledLayout>
)