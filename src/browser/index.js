import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from 'react-apollo'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})

/* APP MOUNTING POINT */
const render = (App) => {
  ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <Router>
        <App/>
      </Router>
    </ApolloProvider>,
    document.getElementById('root')
  )
}

render(App)

/* HOT MODULE RELOADING */
if(module.hot) {
  module.hot.accept('./App', () => {
    render(require('./App'))
  })
}