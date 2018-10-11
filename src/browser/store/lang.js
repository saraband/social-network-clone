import { combineReducers } from 'redux'

export const SET_LANG = 'SET_LANG'

export default (state = 'en', action) => action.type === SET_LANG
	? action.lang
	: state

