import React, { Component } from 'react';

class CounterButton extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  // shouldComponentUpdate - allows us to override if we must update component
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }

    return false;
  }

  updateCount = () => {
    // Because updating state is Asynchronous, if your state needs the previous state its best to update like this
    this.setState(state => {
      return {count: this.state.count + 1}
    });
  };

  render() {
    return (
      <button color={this.props.colr} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton
