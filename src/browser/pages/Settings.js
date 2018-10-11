/*
**  User settings
*/

import React, { Component } from 'react'
import styled from 'styled-components'

/* STYLES */
const StyledSettings = styled.div`
  margin: auto;
`

export default class Profile extends Component {
	render() {
		return(
			<StyledSettings>
				<p>Settings</p>
			</StyledSettings>
		)
	}
}
