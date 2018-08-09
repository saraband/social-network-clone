import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import {
  PROFILE,
  NEWS_FEED
} from 'ROUTES'
import Layout from 'LAYOUT'
import Profile from 'PAGES/Profile'
import NewsFeed from 'PAGES/NewsFeed'
import NotFound404 from 'PAGES/NotFound404'

export default class App extends Component {
  render() {
    return(
      <Layout>
        <Switch>
          <Route exact path={PROFILE} component={Profile} />
          <Route exact path={NEWS_FEED} component={NewsFeed} />
          <Route component={NotFound404} />
        </Switch>
      </Layout>
    )
  }
}