import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from '../components/Card';

// npm test -- --coverage


describe("CardList", ()=>{
    it("CardList SnapShot", () => {
        const mockRobots =[
            {
                id: 1,
                name: "QQQ",
            }
        ];

        expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
    });
} );

