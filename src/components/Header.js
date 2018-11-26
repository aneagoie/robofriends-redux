import React, { Component } from 'react';

import CounterButton from './CounterButton';

class Header extends Component {

  // We are trying to improve app by reducing the number of unnecessary re-renders
  // shouldComponentUpdate - allows us to override if we must update component
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  render() {
    return (
      <div>
        <h1 className='f1'>RoboFriends</h1>
        <CounterButton color={'red'}/>
      </div>
    );
  }
}

export default Header
