import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import CardPage from "../components/CardPage";
import Header from "../components/Header";
import AboutePage from "../components/AboutePage";


function App() {

    return (
        <div className='tc'>
            <Header />

            <Switch>
                <Route exact path={`/`} component={CardPage} />
                <Route path={`/about`} component={AboutePage} />
            </Switch>

        </div>
    );
}




export default App;


