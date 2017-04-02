import React, { Component } from 'react'
import Navcustom from './Navcustom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Navcustom />
        {this.props.children}
      </div>
    )
  }
}

export default App