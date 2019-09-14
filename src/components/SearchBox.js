import React from 'react';
import {setSearchField} from "../redux/Robots/robotsActions";
import {connect} from 'react-redux';



const SearchBox = (props) => {
    const {dispatch} = props;

    const onChange = e => {
        dispatch(setSearchField(e.target.value));
    };

  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={onChange}
      />
    </div>
  );
};

export default connect(null, )(SearchBox);