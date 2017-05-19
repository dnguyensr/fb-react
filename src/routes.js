import React from 'react'
import { Route } from 'react-router-dom'
import App from './App';
import Home from './Home'
import About from './About'
import Restaurants from './Restaurants'

const routes = (props) => (
    <div>
      <App />
      <Route exact path='/' component={ Home } />
      <Route path='/restaurants' component={ Restaurants } />
      <Route path='/about' component={ About } />
    </div>
)


export default routes