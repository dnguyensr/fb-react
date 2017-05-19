import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import App from './App';
// import Home from './Home'
// import Restaurants from './Restaurants'
// import AddRestaurant from './AddRestaurant'
// import About from './About'
import Application from './Application'

/*render(
  <Router>
    <div>
      <App />
      <Route exact path='/' component={ Home } />
      <Route path='/restaurants' component={ Restaurants } />
      <Route path='/addrestaurant' component={ AddRestaurant } />
      <Route path='/about' component={ About } />
    </div>
  </Router>,
  document.getElementById('root')
);*/
render(
  <Application />,
  document.getElementById('root')
);