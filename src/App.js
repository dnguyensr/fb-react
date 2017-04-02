import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Gaming from './Gaming'
import Studio from './Studio'
import './App.css';


const Links = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="active" to='/'>Home</NavLink></li>
      <li><NavLink to='About'>About</NavLink></li>
      <li><NavLink to='Gaming'>Gaming</NavLink></li>
      <li><NavLink to='Studio'>Studio</NavLink></li>
    </ul>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path='/' component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/gaming' component={ Gaming } />
      <Route path='/studio' component={ Studio } />

    </div>
  </Router>
)

export default App