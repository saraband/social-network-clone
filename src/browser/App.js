import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import {
  PROFILE_STATIC,
  NEWS_FEED_STATIC,
  SIGNUP_STATIC,
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
    if(!isConnected)
      return (
        <Switch>
          <Route path={SIGNUP_STATIC} component={Signup} />
          <Route component={Login} />
        </Switch>
      )


    return(
      <Layout>
        <Switch>
          <Route exact path={PROFILE_STATIC} component={Profile} />
          <Route exact path={NEWS_FEED_STATIC} component={NewsFeed} />
          <Route component={NotFound404} />
        </Switch>
      </Layout>
    )
  }
}