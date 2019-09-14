import React from 'react';
import {NavLink} from "react-router-dom";



const Header = () => {
    return (
        <div>
            <h1 className='f1'>RoboFriends</h1>

            <div className={`navigation-bar`}>
                <NavLink to={`/`}>Main</NavLink>
                <NavLink to={`/aboute`}>Aboute</NavLink>
                <NavLink to={`/test`}>Test</NavLink>
            </div>
        </div>
    );
};

export default Header;
