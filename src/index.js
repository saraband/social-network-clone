import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

const render = (App) => {
  ReactDOM.render(
    <Router>
      <App/>
    </Router>,
    document.getElementById('root')
  )
}

render(App)

if(module.hot) {
  module.hot.accept('./App', () => {
    render(require('./App'))
  })
}