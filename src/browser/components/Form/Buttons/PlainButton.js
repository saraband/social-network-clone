import React from 'react'
import styled from 'styled-components'
import COLORS from 'CONSTANTS/Colors'
import { FONT_SIZE } from 'CONSTANTS/Style'

export default styled.button`
  position: relative;
  overflow: hidden;
  border: 0;
  background-color: ${COLORS.BLUE};
  border-top: 2px solid white;
  border-bottom: 2px solid ${COLORS.LIGHT_BLUE};
  font-size: ${FONT_SIZE.MEDIUM};
  color: ${COLORS.WHITE};
  padding: 6px 8px 8px 8px;
  border-radius: 2px;
  cursor: pointer;
  
  &:active {
    opacity: 0.9;
    border-bottom: 0px;
    border-top: 4px solid white;
  }
  
  &:focus {
    outline: 0;
  }
`