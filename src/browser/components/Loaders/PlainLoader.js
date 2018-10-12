import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Rotate } from 'MISC/Animations'

const StyledPlainLoader =  styled.div`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  border-radius: 100%;
  border: ${p => p.size / 7}px solid ${p => p.color};
  border-bottom-color: transparent;
  transform-origin: 50% 50%;
  animation: ${Rotate} 0.6s linear infinite;
`

const PlainLoader = (props) => <StyledPlainLoader {...props} />

PlainLoader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

PlainLoader.defaultProps = {
  color: 'white',
  size: 15
}

export default PlainLoader
