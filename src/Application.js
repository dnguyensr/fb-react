import React, { Component } from 'react';
import { database } from './firebase';
// import { auth, database } from './firebase';
// import CurrentUser from './CurrentUser';
// import SignIn from './SignIn';
import AddRestaurant from './AddRestaurant';
import Restaurants from './Restaurants';
// import './Application.css';
// import map from 'lodash/map';

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // currentUser: null,
      restaurants: null
    };

    this.restaurantRef = database.ref('/restaurants');
  }

  componentDidMount() {
      this.restaurantRef.on('value', (snapshot) => {
        this.setState({ restaurants: snapshot.val() });
      });
    // auth.onAuthStateChanged((currentUser) => {
    //   this.setState({ currentUser });
    // });
  }

  render() {
    const { restaurants } = this.state;
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>
        <div>
          <AddRestaurant />
          <Restaurants restaurants={restaurants}/>
          {/*<Restaurants restaurants={restaurants} user={ currentUser }/>*/}
          {/*<CurrentUser user={ currentUser } />*/}
        </div>
        {/*<div>*/}
          {/*{ !currentUser && <SignIn /> }*/}
          {/*{ currentUser && 
            <div>
              <NewRestaurant />
              <Restaurants restaurants={restaurants} user={ currentUser }/>
              <CurrentUser user={ currentUser } />
            </div>
          }*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default Application;
