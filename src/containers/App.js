import React, {Suspense} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';

import './App.css';
import Header from "../components/Header";
import CounterButton from "../components/CounterButton";


const lazyCardPage = React.lazy( ()=> import("../components/CardPage"));
const lazyAboutePage = React.lazy( ()=> import("../components/AboutePage"));


function App(props) {
    console.log('App render', props);

    return (
        <div className='tc wrapper'>
            <Header />
            <CounterButton />

            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path={`/`} component={lazyCardPage} />
                    <Route path={`/about`} component={lazyAboutePage} />
                </Switch>
            </Suspense>
        </div>
    );
}




export default withRouter(App);


