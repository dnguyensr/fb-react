import React, { Component } from 'react';
import { database } from './firebase';
import PropTypes from 'prop-types';

class AddRestaurant extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };

    this.restaurantsRef = database.ref('/restaurants');
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.name) return false;

    this.restaurantsRef.push({ name: this.state.name });
  }

  render () {
    const { name } = this.state;

    return (
      <form
        className="NewRestaurant"
      >
        <input
          type="text"
          value={ name }
          placeholder="Restaurant Name"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button
          onClick={this.handleSubmit}
          disabled={!name}
        >
          Add Restaurant
        </button>
      </form>
    )
  }
}

AddRestaurant.propTypes = {
  restaurantsRef: PropTypes.object
}

export default AddRestaurant;