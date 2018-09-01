import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { NEWS_FEED_STATIC } from 'ROUTES'

/* STYLES */
const Styled404 = styled.div`
  margin: auto;
  width: 400px;
  margin-top: 300px;
`

export default () => (
  <Styled404>
    <h1>404</h1>
    <h3>Not found → <Link to={NEWS_FEED_STATIC}>Home page</Link></h3>
  </Styled404>
)