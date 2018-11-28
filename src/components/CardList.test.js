import React from 'react';
import { shallow} from 'enzyme';

import CardList from './CardList';

it('should expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Stephen Axtell',
      username: 'heboric',
      email: 'axtell@gmail.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
