import * as actions from './actions';
import * as types from './constants';

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);
let store;

it('should create an action to search robots', () => {
    const text = 'wooo';
    const expectedAction = {
        type: types.CHANGE_SEARCHFIELD,
        payload: text
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
});

describe('request robots', () => {
    beforeEach(() => {
        store = mockStore();
        // usersData = [{ id: 1 }, { id: 2 }];
    });

    afterEach(() => {
    })

    it('handles requesting robots API', () => {
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        const expectedAction = {
            type: types.REQUEST_ROBOTS_PENDING
        };

        expect(action[0]).toEqual(expectedAction);
    });

    // it('handles a successful request', async () => {
    //     nock.disableNetConnect();

    //     const scope = nock('https://jsonplaceholder.typicode.com')
    //         .get('/users')
    //         .reply(200, usersData);

    //     fetch('https://jsonplaceholder.typicode.com/users').then((data) => console.log(data))

    //     // console.log(apiCall('https://jsonplaceholder.typicode.com/users'));

    //     // let tings = await apiCall('https://jsonplaceholder.typicode.com/users');

    //     // console.log(tings);

    //     const expectedActions = [
    //         {
    //             type: types.REQUEST_ROBOTS_PENDING
    //         },
    //         {
    //             type: types.REQUEST_ROBOTS_SUCCESS,
    //             payload: usersData
    //         }
    //     ];
    //     return store.dispatch(actions.requestRobots())
    //         .then( (data) => {
    //             console.log(data);
    //         })
             
        
    // });
});
