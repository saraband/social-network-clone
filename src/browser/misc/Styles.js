/*
**  Styled components used throughout the app
*/

import styled, { keyframes } from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.col ? 'column' : 'row'}
  ${props => props.justify ? `justify-content: ${props.justify};` : ''}
  ${props => props.align ? `align-items: ${props.align};` : ''}
`

export const RotationKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(359deg);
  }
`