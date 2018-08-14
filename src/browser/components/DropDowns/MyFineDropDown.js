import React from 'react'
import styled from 'styled-components'
import withDropDown from 'HOCS/WithDropDown'
import Button from 'COMPONENTS/Form/PlainButton'
import COLORS from 'CONSTANTS/Colors'

const MyFineButton = () => (
  <Button>Click me, I'm so fresh :")</Button>
)

const StyledDropDown = styled.p`
  padding: 30px;
  text-align: center;
  font-size: 14px;
  color: ${COLORS.BLACK};
`

const MyFineDropDown = () => (
  <StyledDropDown>
    See ? I rock.
  </StyledDropDown>
)

export default withDropDown(MyFineDropDown)(MyFineButton)