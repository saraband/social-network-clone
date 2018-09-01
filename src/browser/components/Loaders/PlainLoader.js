import React from 'react'
import styled from 'styled-components'
import { RotationKeyframes } from 'MISC/Styles'
import PropTypes from 'prop-types'

const StyledLoader =  styled.div`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  border-radius: ${p => p.size}px;
  border: ${p => p.size / 7}px solid ${p => p.color};
  border-bottom-color: transparent;
  box-sizing: border-box;
  animation: ${RotationKeyframes} 0.6s linear infinite;
`

const PlainLoader = (props) => <StyledLoader {...props} />

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