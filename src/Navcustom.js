import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navcustom extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink exact to='/'>Home</NavLink></li>
          <li><NavLink to='/restaurants'>Restaurants</NavLink></li>
          <li><NavLink to='/addrestaurant'>Add</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Navcustom