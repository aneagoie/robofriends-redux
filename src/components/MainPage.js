import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';

import './MainPage.css';


class MainPage extends Component {

  componentDidMount() {

    console.log(process.env.REACT_APP_SAY_HI);
    this.props.onRequestRobots();
  }

  filterRobots = ()=> {
    const { robots, searchField } = this.props;

    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, isPending } = this.props;

    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
