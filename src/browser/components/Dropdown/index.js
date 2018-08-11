import React, { PureComponent } from 'react'
import styled from 'styled-components'

const StyledDropdownContainer = styled.div`
  position: relative;
`

const StyledDropdown = styled.div`
  position: absolute;
  top: 100%;
  border: 1px solid red;
  background-color: white;
`

export default class Dropdown extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      toggled: false
    }
  }

  render() {
    const { toggled } = this.state
    const {
      children,
      component
    } = this.props

    return(
      <StyledDropdownContainer>
        <div
          tabIndex='0'
          onClick={() => this.setState({ toggled: !this.state.toggled })}>
          {component}
        </div>
        {toggled &&
          <StyledDropdown>
            {children}
          </StyledDropdown>
        }
      </StyledDropdownContainer>
    )
  }
}