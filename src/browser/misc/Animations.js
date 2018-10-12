/*
**  Animations used throughout the app
*/

import { keyframes } from 'styled-components'

export const FadeUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  } to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(359deg);
  }
`

export const Pulse = keyframes`
  0% {
  	opacity: 1;
  	transform: scale3d(1, 1, 1);
  } 33% {
  	opacity: 0.3;
  	transform: scale3d(1.2, 1.2, 1);
  } 100% {
  	opacity: 1;
  	transform: scale3d(1, 1, 1);
  }
`
