import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

// mount is full dom rendering, anything that interacts with Dom
// or for lifecycle methods => use jsDOM

// render is used to render react components to a static HTML
// uses cheerio under the hood => in between shallow and mount
// doesn't need full DOM API, children underneath to test

// shallowly just renders the MainPage component, not any child components
// use snapshot testing with pure components

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(), // simple function
        robots: [],
        searchField: '',
        isPending: false
    };
    wrapper = shallow(<MainPage {...mockProps} />);
});

describe('MainPage', () => {
    it('renders MainPage without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('filters robots correctly', () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(), // simple function
            robots: [
                {
                    id: 3,
                    name: 'John',
                    email: 'john@gmail.com'
                }
            ],
            searchField: 'john',
            isPending: false
        };
        const wrapper2 = shallow(<MainPage {...mockProps2} />);

        expect(wrapper2.instance().filterRobots()).toEqual([
            {
                id: 3,
                name: 'John',
                email: 'john@gmail.com'
            }
        ]);
    });

    it('filters robots correctly again', () => {
        const mockProps3 = {
            onRequestRobots: jest.fn(), // simple function
            robots: [
                {
                    id: 3,
                    name: 'John',
                    email: 'john@gmail.com'
                }
            ],
            searchField: 'a',
            isPending: false,
        };
        const filteredRobots = [];
        const wrapper3 = shallow(<MainPage {...mockProps3} />);

        expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
    });

    it('renders h1 while isPending', () => {
        const mockProps4 = {
            onRequestRobots: jest.fn(), // simple function
            robots: [],
            searchField: '',
            isPending: true,
        };

        const wrapper4 = shallow(<MainPage {...mockProps4} />);
        expect(wrapper4).toMatchSnapshot();
    });
});
