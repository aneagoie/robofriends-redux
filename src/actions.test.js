import * as actions from './actions';
import * as types from './constants';

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock';

// require('es6-promise').polyfill();
// import 'isomorphic-fetch';

const mockStore = configureStore([thunkMiddleware]);

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
        // store = mockStore();
        // usersData = [{ id: 1 }, { id: 2 }];
    });

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });

    it('handles a successful request', async () => {
        const mockResult = [{ id: 1 }, { id: 2 }];
        fetchMock.mock(
            'https://jsonplaceholder.typicode.com/users',
            mockResult
        )

        const expectedActions = [
            { type: types.REQUEST_ROBOTS_PENDING },
            {
                type: types.REQUEST_ROBOTS_SUCCESS,
                payload: mockResult
            }
        ];

        // let ting = await fetch('https://jsonplaceholder.typicode.com/users');

        const store = await mockStore({})

        // return store.dispatch(actions.requestRobots()).then(expect(store.getActions()).toEqual(expectedActions))
        
        await store.dispatch(actions.requestRobots())

        await store.dispatch({ type: types.REQUEST_ROBOTS_SUCCESS, payload: mockResult } );

        // console.log(store.getActions())

        expect(store.getActions()).toEqual(expectedActions)
    });

    it('handles requesting robots API', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        const expectedAction = {
            type: types.REQUEST_ROBOTS_PENDING
        };

        expect(action[0]).toEqual(expectedAction);
    });
});
