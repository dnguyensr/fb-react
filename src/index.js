import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import Home from './Home'
import Store from './Store'
import About from './About'

render(
  <Router>
    <div>
      <App />
      <Route exact path='/' component={ Home } />
      <Route path='/store' component={ Store } />
      <Route path='/about' component={ About } />
    </div>
  </Router>,
  document.getElementById('root')
);