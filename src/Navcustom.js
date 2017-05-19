import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navcustom extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink exact to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/gaming'>Gaming</NavLink></li>
          <li><NavLink to='/studio'>Studio</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Navcustom