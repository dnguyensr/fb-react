import React from 'react'
import { Route } from 'react-router-dom'
import App from './App';
import Home from './Home'
import About from './About'
import Store from './Store'

const routes = (props) => (
    <div>
      <App />
      <Route exact path='/' component={ Home } />
      <Route path='/store' component={ Store } />
      <Route path='/about' component={ About } />
    </div>
)


export default routes