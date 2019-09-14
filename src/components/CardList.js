import React from 'react';
import Card from './Card';
import {connect} from 'react-redux';



const CardList = (props) => {
    const {robots, searchField} = props;



    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

  return (
    <div>
      { filteredRobots.map(robot => (
          <Card key={robot.id} robot={robot}  />) )
      }

    </div>
  );
};

const mapStateToProps = (state) => ({
    searchField: state.robots.searchField,
    robots: state.robots.robots,
});



export default connect(mapStateToProps, )(CardList);