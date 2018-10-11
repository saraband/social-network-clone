import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import {
  PROFILE,
  NEWS_FEED,
  SIGNUP,
} from 'ROUTES'
import Layout from 'LAYOUTS'
import Profile from 'PAGES/Profile'
import NewsFeed from 'PAGES/NewsFeed'
import NotFound404 from 'PAGES/NotFound404'
import Login from 'PAGES/Login'
import Signup from 'PAGES/Signup'

const isConnected = true

export default class App extends Component {
  render() {

    // If not connected, redirects to the login/signup pages
    if(!isConnected) {
      return (
        <Switch>
          <Route path={SIGNUP} component={Signup}/>
          {/* TODO: Put a redirect here */}
          <Route component={Login}/>
        </Switch>
      )
    }

    /* MAIN ROUTES */
    return(
      <Layout>
        <Chat />
        <Switch>
          <Route exact path={PROFILE} component={Profile} />
          <Route exact path={NEWS_FEED} component={NewsFeed} />
          <Route component={NotFound404} />
        </Switch>
      </Layout>
    )
  }
}
