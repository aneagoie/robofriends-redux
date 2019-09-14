import {createStore, applyMiddleware} from 'redux';
import rootReducer from "./rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {};

const middlewear = [thunk];

let enchancer = null;

if (process.env.NODE_ENV !== 'production') {
    enchancer = composeWithDevTools(
        applyMiddleware( ...middlewear )
    )
} else { enchancer = applyMiddleware( ...middlewear)}


const store = createStore(rootReducer, initialState, enchancer);

export default store;