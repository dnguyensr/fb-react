import React from 'react'
import { Router, Route } from 'react-router'

import About from './About'
import App from './App'

const routes = (props) => (
  <Router {...props}>
    <Route path="/" component={ App }>
      <Route path="/about" component={ About } />
    </Route>
  </Router>
)

export default routes