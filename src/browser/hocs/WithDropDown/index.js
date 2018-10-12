/*
**  DropDown HOC
**  Takes the DropDown component, returns a function
**  That takes the component to display and finally returns
**  The generated component prototype
**  Ex: withDropDown(DropDownComponent)(Component)
*/

import React from 'react'
import styled from 'styled-components'
import COLORS from 'CONSTANTS/Colors'
import { FadeUp } from 'MISC/Animations'

/* STYLES */
const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;
`

const DropDown = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  margin-top: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid ${COLORS.SILVER};
  animation : ${FadeUp} 0.3s ease-in-out;
  
  &:before {
    display: inline-block;
    position: absolute;
    z-index: 42;
    top: -5px;
    left: 50px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    background-color: ${COLORS.RED};
  }
`

const ComponentContainer = styled.div`

`

export default DropDownComponent => Component => class extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      toggled: false
    }
  }

  // Whenever the user clicks anywhere but in the dropdown
  // Hide it (Blur)
  dropDownEvent = event => {
    if(!this.dropDownRef.contains(event.target))
      this.setState({ toggled: false })
  }

  componentDidMount() {
    document.addEventListener('click', this.dropDownEvent)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.dropDownEvent)
  }

  render() {
    const { toggled } = this.state

    return(
      <DropDownContainer innerRef={ref => this.dropDownRef = ref}>
        <ComponentContainer onClick={() => this.setState({ toggled: !toggled })}>
          <Component />
        </ComponentContainer>
        {toggled &&
          <DropDown>
            <DropDownComponent/>
          </DropDown>
        }
      </DropDownContainer>
    )
  }
}
