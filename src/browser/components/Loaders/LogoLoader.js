import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { Pulse } from 'MISC/Animations'

const Circle = styled.div`
	border-radius: 100%;
	background-color: ${p => p.color};
	width: ${p => p.circleSize}%;
	height: ${p => p.circleSize}%;
	position: absolute;
	left: ${p => p.x - (p.circleSize / 2)}%;
	top: ${p => p.y - (p.circleSize / 2)}%;
	animation: ${Pulse} 1s ease-in-out infinite;
	animation-delay: ${p => p.animationDelay}s;
`

const StyledLogoLoader = styled.div`
	position: relative;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
`

const LogoLoader = ({ size, color }) => (
	<StyledLogoLoader size={size}>
		<Circle
			circleSize={8}
			x={35}
			y={20}
			color={color}
			animationDelay={0}
			/>
		<Circle
			circleSize={15}
			x={20}
			y={40}
			color={color}
			animationDelay={0.2}
			/>
		<Circle
			circleSize={22}
			x={35}
			y={65}
			color={color}
			animationDelay={0.4}
			/>
		<Circle
			circleSize={30}
			x={75}
			y={70}
			color={color}
			animationDelay={0.6}
			/>
	</StyledLogoLoader>
)

LogoLoader.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	])
}

LogoLoader.defaultProps = {
	color: 'white',
	size: 15
}

export default LogoLoader
