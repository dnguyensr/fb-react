import React from 'react'
import { Route } from 'react-router-dom'
import App from './App';
import Home from './Home'
import About from './About'
import Gaming from './Gaming'
import Studio from './Studio'

const routes = (props) => (
    <div>
      <App />
      <Route exact path='/' component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/gaming' component={ Gaming } />
      <Route path='/studio' component={ Studio } />
    </div>
)


/*const routes = (props) => (

  </Router>


  <Router {...props}>
    <Route path="/" component={ App }>
      <Route path="/about" component={ About } />
    </Route>
  </Router>
)*/

export default routes