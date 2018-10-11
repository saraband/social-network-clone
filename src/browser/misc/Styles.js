/*
**  Styled components used throughout the app
*/

import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.col ? 'column' : 'row'}
  ${props => props.justify ? `justify-content: ${props.justify};` : ''}
  ${props => props.align ? `align-items: ${props.align};` : ''}
`
