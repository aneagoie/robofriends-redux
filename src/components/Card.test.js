import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

// mount is full dom rendering, anything that interacts with Dom
// or for lifecycle methods => use jsDOM

// render is used to render react components to a static HTML
// uses cheerio under the hood => in between shallow and mount
// doesn't need full DOM API, children underneath to test

// shallowly just renders the Card component, not any child components
// use snapshot testing with pure components
it('expect to render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});
