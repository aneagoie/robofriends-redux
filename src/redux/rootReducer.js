import {combineReducers} from 'redux';
import robotsReducer from "./Robots/robotsReducers";



const rootReducer = combineReducers({
    robots: robotsReducer,
});

export default rootReducer;