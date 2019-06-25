import React from 'react';
import './SearchBox.css'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
    <h3><u><label htmlFor="r_search">Search Robots</label></u></h3>
      <input
        id='r_search'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;