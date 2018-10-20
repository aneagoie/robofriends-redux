import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

// mount is full dom rendering, anything that interacts with Dom
// or for lifecycle methods => use jsDOM

// render is used to render react components to a static HTML
// uses cheerio under the hood => in between shallow and mount
// doesn't need full DOM API, children underneath to test

// shallowly just renders the CounterButton component, not any child components
// use snapshot testing with pure components

describe('CounterButton', () => {
    it('expect to render CounterButton component', () => {
        const mockColor = 'red';
        expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
    });

    it('correctly increments the counter', () => {
        const mockColor = 'red';
        const wrapper = shallow(<CounterButton color={mockColor} />);

        wrapper.find('[id="counter"]').simulate('click');
        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({ count: 2 });
        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({ count: 3 });
        wrapper.find('[id="counter"]').simulate('keypress');
        expect(wrapper.state()).toEqual({ count: 3 });
        expect(wrapper.props().color).toEqual('red');
    });
});
