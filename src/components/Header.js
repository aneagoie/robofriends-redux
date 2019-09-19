import React from 'react';
import {NavLink} from "react-router-dom";



const Header = (props) => {
    const {match, location} = props;


    return (
        <div>
            <h1 className=''>RoboFriends</h1>

            <div className={`navigation-bar`}>
                <NavLink to={`/`}>Main</NavLink>
                <NavLink to={`/about`}>Aboute</NavLink>
                <NavLink to={`/test`}>Test</NavLink>
            </div>
        </div>
    );
};

function areEqual(prevProps, nextProps) {
   // If props compare return true: component didn't update
}

export default React.memo(Header);
