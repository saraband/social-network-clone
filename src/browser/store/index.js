import lang from 'STORE/lang'
import { combineReducers } from 'redux'
import { createStore } from 'redux'

const rootReducer = combineReducers({
	lang
})

export default createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: undefined
)
