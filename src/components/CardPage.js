import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import ErrorBoundry from "./ErrorBoundry";
import Scroll from "./Scroll";
import {requestRobots} from "../redux/Robots/robotsActions";


const CardPage = (props) => {
    const {requestRobots, isPending, isRobotsExists} = props;

    useEffect(()=>{
        if (isRobotsExists) return;
        requestRobots();
        //eslint ignore next line
    }, []);

    return (
        <div>
            <SearchBox />

                <Scroll>
                    { isPending ? <h1>Loading</h1> :
                        <ErrorBoundry>
                            <CardList />
                        </ErrorBoundry>
                    }
                </Scroll>

        </div>
    );
};



const mapStateToProps = (state) => ({
    isPending: state.robots.isPending,
    isRobotsExists: state.robots.robots.length
});

const mapDispatchToProps =  {
    requestRobots
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);
