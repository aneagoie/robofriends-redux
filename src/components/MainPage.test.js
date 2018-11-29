import React from 'react';
import { shallow} from 'enzyme';

import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };

  wrapper = shallow(<MainPage {...mockProps}/>);
});

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robot correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'Jerry',
      email: 'jerry@gmail.com'
    }],
    searchField: 'jerry',
    isPending: false
  };

  const wrapper2 = shallow(<MainPage {...mockProps2}/>);
  expect(wrapper.instance().filterRobots()).toEqual([]);

  expect(wrapper2.instance().filterRobots()).toEqual([{
    id: 3,
    name: 'Jerry',
    email: 'jerry@gmail.com'
  }]);
});

it('filters robot correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'Jerry',
      email: 'jerry@gmail.com'
    }],
    searchField: 'a',
    isPending: false
  };

  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3}/>);

  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});
